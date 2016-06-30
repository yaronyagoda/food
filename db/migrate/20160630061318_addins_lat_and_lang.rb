class AddinsLatAndLang < ActiveRecord::Migration
  def change
    add_column :restaurants, :lat, :string
    add_column :restaurants, :lang, :string
  end
end
