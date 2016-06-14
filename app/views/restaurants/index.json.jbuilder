json.array!(@restaurants) do |restaurant|
  json.extract! restaurant, :id, :name, :food_type, :speed
  json.url restaurant_url(restaurant, format: :json)
end
