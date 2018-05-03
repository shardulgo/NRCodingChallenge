


class CreateCardInfo < ActiveRecord::Migration[5.0]
  def change
    create_table :card_info do |t|
      t.string :name
      t.string :company

      t.timestamps
    end
  end
end
