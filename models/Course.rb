class Course < ActiveRecord::Base
  has_many :presentations , dependent: :destroy
end
