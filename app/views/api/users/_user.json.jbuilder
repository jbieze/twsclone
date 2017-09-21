json.extract! user, :id, :username, :email, :img_url

json.events user.events.each do |event|
  json.id event.id
  json.city_id event.city_id
  json.host_id event.host_id
  json.attendee_id event.attendee_id
  json.location event.location
end

json.hosted_events user.hosted_events do |event|
  json.id event.id
  json.city_id event.city_id
  json.host_id event.host_id
  json.attendee_id event.attendee_id
  json.location event.location
end
