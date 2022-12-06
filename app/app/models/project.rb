class Project < ApplicationRecord

<<<<<<< HEAD
    has_many :comments
    has_many :users, through: :comments

    validates :date, :progress, :challenge, :bug, :image, presence: true
=======
validates :date, :name, :progress, :challenge, :bug, :image, presence: true
>>>>>>> 443418c493c0cd5077160b449ee0cd1df16d17db

end
