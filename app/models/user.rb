# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  img_url         :string
#  password_digest :string           not null
#  session_token   :string           not null
#  city_id         :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  before_validation :ensure_session_token

  has_many :joins,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Join

  has_many :joined_events, through: :joins

  has_many :hosted_events,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :Event

  belongs_to :city,
    primary_key: :id,
    foreign_key: :city_id,
    class_name: :City,
    optional: :true

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && user.is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
