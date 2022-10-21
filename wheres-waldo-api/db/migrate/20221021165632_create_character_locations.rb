class CreateCharacterLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :character_locations do |t|
      t.references :character
      t.references :game
      t.integer :x_coordinates, array: true, default: []
      t.integer :y_coordinates, array: true, default: []

      t.timestamps
    end
  end
end
