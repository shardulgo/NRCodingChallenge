ActiveRecord::Schema.define(version: 20170119115504) do

  create_table "card_info", force: :cascade do |t|
    t.string   "name"
    t.string   "company"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
