class AddBoardToUser < ActiveRecord::Migration
  def change
    add_column :users, :board_title, :string
  end
end
