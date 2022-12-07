class Comment < ApplicationRecord

    belongs_to :project
    belongs_to :user

    validates :content, :likes, presence: true
    validates :content, uniqueness: true

end
