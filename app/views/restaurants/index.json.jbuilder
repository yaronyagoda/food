json.array!(@restaurants) do |restaurant|
  json.extract! restaurant, :id, :name, :cuisine_types_id, :speed, :is_ten_bis, :is_delivery, :link, :rank, :description, :address, :latitude, :longitude
  json.url restaurant_url(restaurant, format: :json)
end
