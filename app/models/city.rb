# == Schema Information
#
# Table name: cities
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  img_url    :string
#

class City < ApplicationRecord
  validates :name, :img_url, presence: true

  has_many :users,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end
