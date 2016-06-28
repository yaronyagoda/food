class DropTables < ActiveRecord::Migration
  def change
    drop_table :likes
    drop_table :dislikes
    drop_table :users
  end
end
