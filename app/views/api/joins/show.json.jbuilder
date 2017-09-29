json.extract! @join, :id, :user_id, :event_id

json.event do
  json.partial! 'api/events/event', event: @event
end

json.events @join.user.events.each do |event|
    json.id event.id
    json.address event.address
    json.description event.description
    json.date event.date_time
    json.time event.date_time
end

json.hosted_events @join.user.hosted_events do |event|
  json.id event.id
  json.address event.address
  json.description event.description
  json.date event.date_time
  json.time event.date_time
end
