# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  city_id     :integer          not null
#  host_id     :integer          not null
#  attendee_id :integer          not null
#  location    :string           not null
#

class Event < ApplicationRecord
  validates :city_id, :host_id, presence: true

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :User

  belongs_to :city,
    primary_key: :id,
    foreign_key: :city_id,
    class_name: :City

  has_many :attendees,
    primary_key: :id,
    foreign_key: :attendee_id,
    class_name: :User
end
