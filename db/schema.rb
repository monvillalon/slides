# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 0) do

  create_table "courses", force: :cascade do |t|
    t.string   "name",       limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "presentations", force: :cascade do |t|
    t.integer  "course_id",  limit: 4,                null: false
    t.string   "name",       limit: 255, default: "", null: false
    t.integer  "position",   limit: 4,                null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "slides", force: :cascade do |t|
    t.integer "presentation_id", limit: 4
    t.text    "content",         limit: 65535
    t.string  "valign",          limit: 255,   default: "", null: false
    t.string  "halign",          limit: 255,   default: "", null: false
    t.integer "position",        limit: 4,                  null: false
  end

end
