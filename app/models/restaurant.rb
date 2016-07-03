class Restaurant < ActiveRecord::Base
  has_one :cuisine_type
end
