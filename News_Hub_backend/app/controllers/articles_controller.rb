class ArticlesController < ApplicationController
    def create
        article = Article.create(article_params)
        # if Article.save
            render json: article
        # end
    end

    def destroy
        article = Article.find_by(id: params[:id])
        if article 
            article.destroy
        end
    end

    private
    def article_params
        params.require(:article).permit(:title, :content, :image, :author, :url, :user_id)
    end

end
