class List < ActiveRecord::Base
  attr_accessible :listtitle
  belongs_to :board
  has_many :cards
end
