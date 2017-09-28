# == Schema Information
#
# Table name: joins
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  event_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class JoinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
