class AddLikesIndex < ActiveRecord::Migration
  def change
    add_index :likes, [:user_id, :restaurant_id], :unique => true
    add_index :dislikes, [:user_id, :restaurant_id], :unique => true
  end
end
