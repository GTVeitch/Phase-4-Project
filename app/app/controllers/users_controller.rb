class UsersController < ApplicationController

    before_action :set_user, only: [:show, :destroy]
    before_action :authorize
    skip_before_action :authorize, only: [:index, :show]

    def index
        render json: User.all
    end

    def show
        if @user.valid?
            render json: @user, status: 200
        else
            render json: {error: "User not found"}, status: :not_found
        end
    end

    def destroy
        if @user.valid?
            @user.destroy
            head :no_content
        else
            render json: { error: "User not found" }, status: :not_found
        end
    end

    private
        def set_user
            @user = User.new
            if User.exists?(params[:id])
                @user = User.find(params[:id])
            end
        end

        def authorize
            return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        end

end
