# # == Schema Information
# #
# # Table name: cities
# #
# #  id      :integer          not null, primary key
# #  name    :string           not null
# #  user_id :integer          not null
# #
#
# class City < ApplicationRecord
#   validates :name, presence: true
#
#   has_many :attendees,
#     primary_key: :id,
#     foreign_key: :user_id,
#     class_name: User
# end
