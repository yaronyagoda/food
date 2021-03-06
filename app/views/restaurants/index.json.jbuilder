json.array!(@restaurants) do |restaurant|
  json.extract! restaurant, :id, :name, :food_type, :speed, :ten_bis, :delivery, :link, :rank, :description, :address, :lat, :lang
  json.url restaurant_url(restaurant, format: :json)
end
