class CreateDislikes < ActiveRecord::Migration
  def change
    create_table :dislikes do |t|
      t.belongs_to :user, index: true, foreign_key: true
      t.belongs_to :restaurant, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
