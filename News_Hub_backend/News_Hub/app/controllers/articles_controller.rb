class ArticlesController < ApplicationController
        def index
            @articles = Article.all
            render json: @articles
        end
    
        def show
            @article = Article.find_by(id: params[:id])
            if @article != nil
                rener json: Article
            else
                render json: {error: "Article not found."}, status: 404
            end
        end

end