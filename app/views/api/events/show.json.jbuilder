json.partial! 'event', event: @event
json.city City.find(@event.city_id)
