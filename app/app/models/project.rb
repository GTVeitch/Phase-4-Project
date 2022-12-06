class Project < ApplicationRecord

    has_many :comments
    has_many :users, through: :comments

    validates :date, :progress, :challenge, :bug, :image, presence: true

end
