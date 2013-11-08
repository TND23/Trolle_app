class Card < ActiveRecord::Base
  attr_accessible :cardtitle, :cardbody
  belongs_to :list
end
