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

ActiveRecord::Schema.define(version: 20160628061841) do

  create_table "dislikes", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "restaurant_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "dislikes", ["restaurant_id"], name: "index_dislikes_on_restaurant_id"
  add_index "dislikes", ["user_id", "restaurant_id"], name: "index_dislikes_on_user_id_and_restaurant_id", unique: true
  add_index "dislikes", ["user_id"], name: "index_dislikes_on_user_id"

  create_table "likes", force: :cascade do |t|
    t.datetime "created_at",    null: false
    t.integer  "user_id"
    t.integer  "restaurant_id"
    t.datetime "updated_at",    null: false
  end

  add_index "likes", ["restaurant_id"], name: "index_likes_on_restaurant_id"
  add_index "likes", ["user_id", "restaurant_id"], name: "index_likes_on_user_id_and_restaurant_id", unique: true
  add_index "likes", ["user_id"], name: "index_likes_on_user_id"

  create_table "restaurants", force: :cascade do |t|
    t.string   "name"
    t.string   "food_type"
    t.string   "speed"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.boolean  "ten_bis"
    t.boolean  "delivery"
    t.string   "link"
    t.string   "description"
    t.integer  "rank"
    t.string   "address"
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
