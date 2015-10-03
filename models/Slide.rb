require 'sinatra/activerecord'

class Slide < ActiveRecord::Base
  belongs_to :presentation
end
