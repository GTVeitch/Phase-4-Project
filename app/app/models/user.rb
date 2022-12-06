class User < ApplicationRecord

    has_many :comments
    has_many :projects, through: :comments

    validates :username, :password, :display_name, presence: true
    validates :username, uniqueness: true

end
