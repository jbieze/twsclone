@events.each do |event|
  json.set! event.id do
    json.extract! event, :id, :address, :description, :city_id, :host_id, :date_time
  end
end

    # json.id event.id
    # json.address event.address
    # json.description event.description
    # json.date event.date_time.strftime("%F")
    # json.time event.date_time.strftime("%I:%M %p")
