class CreateCities < ActiveRecord::Migration[5.1]
  def change
    create_table :cities do |t|
      t.string :name, null: false
      t.integer :user_id, null: false
    end

    add_index :cities, :name
    add_index :cities, :user_id
  end
end
