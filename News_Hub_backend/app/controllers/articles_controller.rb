class ArticlesController < ApplicationController

    def index
        articles = Article.all
        render json: articles
    end

    def show
        article = Article.find_by(id: params[:id])
        render json: article
    end

    def create
        article = Article.create(article_params)
        # if Article.save
            render json: article
        # end
    end

    def update
        article = Article.find_by(id: params[:id])
        if article
            article.update(user_id: article_params[:user_id])
            render json: article
        end
    end

    def destroy
        article = Article.find_by(id: params[:id])
        if article 
            article.destroy
            render json: article
        else
            render json: {error: "Article doesn't exist"}
        end
    end

    private
    def article_params
        params.require(:article).permit(:title, :content, :urlToImage, :author, :url, :user_id)
    end

end
