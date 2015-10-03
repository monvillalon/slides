require 'pry'
require 'json'
require 'sinatra'
require "sinatra/namespace"
require 'sinatra/json'
require './models/Course'
require './models/Presentation'
require './models/Slide'

enable :sessions

#Serve the index document
get '/' do
  File.read(File.join('public', 'index.html'))
end

namespace '/api' do

  get '/courses' do
    json Course.all
  end

  get '/courses/:course' do

    begin
      json Course.find( params[:course] )
    rescue ActiveRecord::RecordNotFound
      halt 404
    end

  end

  get '/courses/:course/presentations' do

    begin
      json Course.find( params[:course] ).presentations
    rescue ActiveRecord::RecordNotFound
      halt 404
    end

  end

  post '/courses/:course/presentations' do
    body         = JSON.parse request.body.read
    presentation = Presentation.new
    presentation_save( params[:course] , presentation , body )
  end

  get '/courses/:course/presentations/:presentation' do

    begin
      content_type :json
      Presentation.find( params[:presentation] ).to_json :methods => :content
    rescue ActiveRecord::RecordNotFound
      halt 404
    end

  end

  put '/courses/:course/presentations/:presentation' do
    body         = JSON.parse request.body.read
    presentation = Presentation.find( params[:presentation] )
    presentation_save( presentation.course_id , presentation , body )
  end

  delete '/courses/:course/presentations/:presentation' do
    presentation = Presentation.find( params[:presentation] )
    presentation.delete
  end

  def presentation_save( course_id , presentation , body )

    ActiveRecord::Base.transaction do

      #Save presentation
      presentation.course_id = course_id
      presentation.name      = body['name']
      presentation.position  = 0
      presentation.save!

      # Find the slides not available in the body
      toDelete = Array.new(presentation.slides).reject! { | slide |
        body['slides'].index { | slideBody | slideBody["id"] == slide.id }
      }
      toDelete.each { | slide | slide.destroy } if toDelete != nil

      #Update or craete new slides
      i = 0
      presentation.slides = body['slides'].map do | slideBody  |
          if( slideBody['id'] )
            slide = Slide.find( slideBody['id'] )
          else
            slide = Slide.new
          end
          slide.content      = slideBody['content']
          slide.valign       = slideBody['valign'] || 'top'
          slide.halign       = slideBody['halign'] || 'left'
          slide.position     = i
          slide.presentation_id = presentation.id
          slide.save!
          i += 1
          slide
      end

    end

    ""

  end

  get '/courses/:course/presentations/:presentation/slides' do

    begin
      json Presentation.find( params[:presentation] ).slides
    rescue ActiveRecord::RecordNotFound
      halt 404
    end

  end

end

not_found do
  "Not Found"
end