class List < ActiveRecord::Base
  attr_accessible :listtitle, :board_id, :id
  belongs_to :board
  has_many :cards

end
