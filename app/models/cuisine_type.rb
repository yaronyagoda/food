class CuisineType < ActiveRecord::Base
  has_many :restaurants
end
