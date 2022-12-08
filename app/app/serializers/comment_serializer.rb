class CommentSerializer < ActiveModel::Serializer
  attributes :content, :likes, :user_id, :project_id, :id
end
