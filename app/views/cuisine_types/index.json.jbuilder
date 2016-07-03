json.array!(@cuisine_types) do |cuisine_type|
  json.extract! cuisine_type, :id, :name
  json.url cuisine_type_url(cuisine_type, format: :json)
end
