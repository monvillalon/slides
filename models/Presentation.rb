require 'sinatra/activerecord'

class Presentation < ActiveRecord::Base
  belongs_to :course
  has_many   :slides

  def content
     content = ""
     size   = slides.size
     slides.each_with_index do | slide , i |
       content += slide.content.gsub(/^-{3,}$/, '<hr />')
       content +=  "\n---\n" unless i == size - 1
     end
     content
  end

end
