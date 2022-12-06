class ProjectsController < ApplicationController

    before_action :set_project, only: [:show, :destroy]

    def index
        render json: Project.all
    end

    def show
        if @project.valid?
            render json: @project, status: 200
        else
            render json: {error: "Project not found"}, status: :not_found
        end
    end

    def destroy
        if @project.valid?
            @project.destroy
            head :no_content
        else
            render json: { error: "Project not found" }, status: :not_found
        end
    end


    private
        def set_project
            @project = Project.new
            if Project.exists?(params[:id])
                @project = Project.find(params[:id])
            end
        end
end
