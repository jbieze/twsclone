@events.each do |event|
  json.set! event.id do
    json.extract! event, :id, :address, :description, :city_id, :host_id, :date_time
  end
end
