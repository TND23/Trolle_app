class AddCardConstraintsAndIndex < ActiveRecord::Migration
  def up
    add_index :cards, :list_id, :null => false
  end

  def down
  end
end
