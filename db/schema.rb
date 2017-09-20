# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170919203202) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cities", force: :cascade do |t|
    t.string "name", null: false
    t.integer "user_id", null: false
    t.index ["name"], name: "index_cities_on_name"
    t.index ["user_id"], name: "index_cities_on_user_id"
  end

  create_table "events", force: :cascade do |t|
    t.integer "city_id", null: false
    t.integer "host_id", null: false
    t.integer "attendee_id", null: false
    t.string "location", null: false
    t.index ["attendee_id"], name: "index_events_on_attendee_id"
    t.index ["city_id"], name: "index_events_on_city_id"
    t.index ["host_id"], name: "index_events_on_host_id"
  end

  create_table "joins", force: :cascade do |t|
    t.integer "attendee_id", null: false
    t.integer "event_id", null: false
    t.index ["attendee_id"], name: "index_joins_on_attendee_id"
    t.index ["event_id"], name: "index_joins_on_event_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "img_url", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.index ["email"], name: "index_users_on_email"
    t.index ["username"], name: "index_users_on_username"
  end

end
