class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.string :listtitle
      t.timestamps
    end
  end
end