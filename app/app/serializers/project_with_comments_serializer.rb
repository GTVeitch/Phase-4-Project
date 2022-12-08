class ProjectWithCommentsSerializer < ActiveModel::Serializer
  attributes :id, :date, :progress, :challenge, :bug, :image
  has_many :comments
end
