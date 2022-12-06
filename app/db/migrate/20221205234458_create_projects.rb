class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :date
      t.string :name
      t.string :progress
      t.string :challenge
      t.string :bug
      t.string :image

      t.timestamps
    end
  end
end
