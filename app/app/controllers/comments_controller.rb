class CommentsController < ApplicationController

    before_action :set_comment, only: [:show, :destroy]
    
    def index
        render json: Comment.all
    end

    def show
        if @comment.valid?
            render json: @comment, status: 200
        else
            render json: {error: "Comment not found"}, status: :not_found
        end
    end

    def create
        new_comment = Comment.create(comment_params)
        render json: new_comment ,status: :created
    end

    def destroy
        if @comment.valid?
            @comment.destroy
            head :no_content
        else
            render json: { error: "Comment not found" }, status: :not_found
        end
    end

    private
        def set_comment
            @comment = Comment.new
            if Comment.exists?(params[:id])
                @comment = Comment.find(params[:id])
            end
        end

        def authorize
            return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        end

        def comment_params
            params.permit(:content, :user_id, :project_id, :username, :likes)
        end

end
