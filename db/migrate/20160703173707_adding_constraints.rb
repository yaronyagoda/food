class AddingConstraints < ActiveRecord::Migration
  def change
    change_column :restaurants, :name, :string, null: false
    change_column :restaurants, :speed, :string, null: false
    change_column :restaurants, :link, :string, null: false
    change_column :restaurants, :description, :string, null: false
    change_column :restaurants, :rank, :integer, null: false
    change_column :restaurants, :address, :string, null: false
    change_column :restaurants, :cuisine_types_id, :integer, null: false

    rename_column :restaurants, :ten_bis, :is_ten_bis
    rename_column :restaurants, :delivery, :is_delivery

    change_column :restaurants, :is_ten_bis, :boolean, null: false
    change_column :restaurants, :is_delivery, :boolean, null: false

    add_index :restaurants, :name, :unique => true

    add_foreign_key :restaurants, :cuisine_types

  end
end
