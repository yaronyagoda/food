class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :food_type
      t.string :speed

      t.timestamps null: false
    end
  end
end
