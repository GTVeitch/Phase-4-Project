class Project < ApplicationRecord

validates :date, :name, :progress, :challenge, :bug, :image, presence: true

end
