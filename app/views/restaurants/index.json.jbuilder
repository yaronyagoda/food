json.array!(@restaurants) do |restaurant|
  json.extract! restaurant, :id, :name, :cuisine_types_id, :speed, :ten_bis, :delivery, :link, :rank, :description, :address, :lat, :lang
  json.url restaurant_url(restaurant, format: :json)
end
