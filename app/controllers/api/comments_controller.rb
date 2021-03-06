class Api::CommentsController < ApplicationController

  before_action :require_logged_in

  def index
    #give me all of the comments under a specific photo
    @comments = Photo.find_by(id: params[:photo_id]).comments
  end

  def create
    @comment = Comment.new(comment_params)

    @comment.user_id = current_user.id
    @photo = Photo.find_by(id: params[:photo_id])


    @comment.photo_id = @photo.id
    #get the username of the user who posted the comment
    @comment.comment_user = current_user.username

    @user = User.find_by(id: @comment.user_id)

    unless @comment.save
      render json: @comment.errors.full_messages, status: 422
    end

    p @comment
  end

  def update
    @comment = current_user.comments.find_by(id: params[:id])
    unless @comment.update_attributes(comment_params)
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = current_user.comments.find_by(id: params[:id])
    @comment.destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :comment_user)
  end

end
