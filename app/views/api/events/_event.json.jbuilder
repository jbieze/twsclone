json.extract! event, :id, :date_time, :address, :description, :city_id, :host_id

json.host { json.partial! 'api/users/user', user: event.host }
json.city { json.partial! 'api/cities/city', city: event.city }
