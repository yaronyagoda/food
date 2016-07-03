class ChangeLocationNames < ActiveRecord::Migration
  def change
    rename_column :restaurants, :lat, :latitude
    rename_column :restaurants, :lang, :longitude

    change_column :restaurants, :latitude, :string, null: false
    change_column :restaurants, :longitude, :string, null: false


  end
end
