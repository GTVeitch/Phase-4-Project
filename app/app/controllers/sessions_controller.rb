class SessionsController < ApplicationController

    before_action :authorize

    def index
        session[:session_hello] ||= "World"
        cookies[:cookies_hello] ||= "World"
        render json: { session: session, cookies: cookies.to_hash }
    end

    def create
        user = User.find_by(username: params[:username])
        session[:user_id] = user.id
        render json: user
    end

    def destroy
        session[:user_id] = nil
        render json: { }, status: 204
    end

    private
        def authorize
            return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        end
end
