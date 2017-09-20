class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.integer :city_id, null: false
      t.integer :host_id, null: false
      t.integer :attendee_id, null: false
      t.string :location, null: false
    end

    add_index :events, :city_id
    add_index :events, :host_id
    add_index :events, :attendee_id
  end
end
