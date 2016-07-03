class CreateCuisineTypes < ActiveRecord::Migration
  def change
    create_table :cuisine_types do |t|
      t.string :name
      t.timestamps null: false
    end

    add_reference :restaurants, :cuisine_types, index: true
  end
end
