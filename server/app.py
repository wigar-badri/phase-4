#!/usr/bin/env python3

from flask import Flask, jsonify, request, session, make_response
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt

from models import db, User, Stock, Post

app = Flask(__name__)
app.secret_key = b'Y\xf1Xz\x00\xad|eQ\x80t \xca\x1a\x10K'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)


## ----- HOME PAGE ----- ##

@app.route("/")
def index():
    return "<h1>HOME PAGEr<h1>"


## ----- USER ROUTES ----- ##

# GET ALL USERS #
@app.get('/users')
def get_users_all():
    try:
        users = User.query.all()
        users_list = [user.to_dict() for user in users]
        return make_response(jsonify(users_list), 200)
    except AttributeError:
        return make_response({'error' : '404 users not found'}, 404)

# GET USER BY ID #
@app.get('/users/<int:id>')
def get_user_by_id(id:int):
    try:
        user = User.query.filter(User.id == id).first()
        return make_response(jsonify(user.to_dict()), 200)
    except AttributeError:
        return make_response({'error' : f'404 user-{id} not found'}, 404)

# GET ALL USER POSTS #
@app.get('/users/<int:user_id>/posts')
def get_user_posts_all(user_id:int):
    try:
        user = User.query.filter(User.id == user_id).first()
        user_posts_list = [post.to_dict() for post in user.posts]
        return make_response(jsonify(user_posts_list), 200)
    except AttributeError:
        return make_response({'error' : f'404 user-{id} posts not found'}, 404)

# FAVORITE POST #
@app.post('/')

## ----- STOCK ROUTES ----- ##

# GET ALL STOCKS #
@app.get('/stocks')
def get_stocks_all():
    try:
        stocks = Stock.query.all()
        stocks_list = [stock.to_dict() for stock in stocks]
        return make_response(jsonify(stocks_list), 200)
    except AttributeError:
        return make_response({'error' : '404 stocks not found'}, 404)

# GET STOCK BY ID #
@app.get('/stocks/<int:id>')
def get_stock_by_id(id:int):
    try:
        stock = Stock.query.filter(Stock.id == id).first()
        return make_response(jsonify(stock.to_dict()), 200)
    except AttributeError:
        return make_response({'error' : f'404 stock-{id} not found'}, 404)


## ----- POST ROUTES ----- ##

# GET ALL POSTS #
@app.get('/posts')
def get_posts_all():
    try:
        posts = Post.query.all()
        posts_list = [post.to_dict() for post in posts]
        return make_response(jsonify(posts_list), 200)
    except AttributeError:
        return make_response({'error' : '404 posts not found'}, 404)

# GET POST BY ID #
@app.get('/posts/<int:id>')
def get_post_by_id(id:int):
    try:
        post = Post.query.filter(Post.id == id).first()
        return make_response(jsonify(post.to_dict()), 200)
    except AttributeError:
        return make_response({'error' : f'404 post-{id} not found'}, 404)


## ----- RUN MAIN ----- ##

if __name__ == "__main__":
    app.run(port=5555, debug=True)