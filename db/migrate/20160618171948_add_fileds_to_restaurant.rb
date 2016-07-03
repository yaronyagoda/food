class AddFiledsToRestaurant < ActiveRecord::Migration
  def change
    add_column :restaurants, :ten_bis, :boolean
    add_column :restaurants, :delivery, :boolean
    add_column :restaurants, :link, :string
    add_column :restaurants, :description, :string
    add_column :restaurants, :rank, :integer
  end
end
