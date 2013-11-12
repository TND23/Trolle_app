class Board < ActiveRecord::Base
  attr_accessible :boardtitle
  belongs_to :user
  validates :user_id, :presence => true
end
