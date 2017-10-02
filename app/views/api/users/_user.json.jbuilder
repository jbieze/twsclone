json.extract! user, :id, :username, :email, :city_id

json.joined_events user.joined_events
