# == Schema Information
#
# Table name: joins
#
#  id          :integer          not null, primary key
#  attendee_id :integer          not null
#  event_id    :integer          not null
#

class Join < ApplicationRecord
  validates :attendee_id, :host_id, presence: true

  has_many :attendees,
    primary_key: :id,
    foreign_key: :attendee_id,
    class_name: :User

  has_many :events,
    primary_key: :id,
    foreign_key: :event_id,
    class_name: Event
end
