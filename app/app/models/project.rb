class Project < ApplicationRecord

    has_many :comments
    has_many :users, through: :comments

    validates :date, :time, :progress, :challenge, :bug, :image, presence: true

end
