class Join < ApplicationRecord
  belongs_to :user,
    foreign_key: :user_id,
    primary_key: :id,
    class_name: "User"

  belongs_to :event,
    foreign_key: :event_id,
    primary_key: :id,
    class_name: "Event"
end
