class Board < ActiveRecord::Base
  attr_accessible :boardtitle
  belongs_to :user
 #after_initialize :ensure_belongs_to_user
  
  private 
  # def ensure_belongs_to_user
#     self.user || self.user = current_user
#   end
#   
end
