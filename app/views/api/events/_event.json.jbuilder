json.extract! event, :id, :address, :description, :city_id, :host_id, :date_time

json.date event.date.strftime("%A %b %d")
json.time event.time.strftime("%I:%M %p")
