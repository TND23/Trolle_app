class Card < ActiveRecord::Base
  attr_accessible :cardtitle, :cardbody
  validates :cardtitle, :presence => true
  belongs_to :list
end
