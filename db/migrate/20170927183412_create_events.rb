class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :address, null: false
      t.text :description
      t.integer :city_id, null: false
      t.integer :host_id, null: false
      t.datetime :date_time, null: false

      t.timestamps
    end
    add_index :events, :city_id
    add_index :events, :host_id
  end
end
