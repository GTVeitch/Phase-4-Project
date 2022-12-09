class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.string :content
      t.integer :likes
      t.string :username
      t.belongs_to :user
      t.belongs_to :project
      t.timestamps
    end
  end
end
