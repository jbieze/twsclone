class CreateJoin < ActiveRecord::Migration[5.1]
  def change
    create_table :joins do |t|
      t.integer :attendee_id, null: false
      t.integer :event_id, null: false
    end

    add_index :joins, :attendee_id
    add_index :joins, :event_id
  end
end
