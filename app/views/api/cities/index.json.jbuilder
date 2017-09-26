@cities.each do |city|
  json.set! city.id do
    json.id city.id
    json.name city.name
    json.img_url asset_path(city.img_url)
  end
end
