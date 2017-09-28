json.partial! 'api/events/event', event: @event

json.users do
  json.array! @event.users, partial: 'api/users/user', as: :user
end
