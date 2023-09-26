from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, nullable=False)
    last_name= db.Column(db.String, nullable=False)
    level = db.Column(db.Integer, nullable=False)

    #relationships
    savedPosts = db.relationship('savedPost', back_populates='user')
    trades = db.relationship("Trade", back_populates = "user")
    posts = association_proxy('savedPosts', 'post')
    stocks = association_proxy('stocks', 'stock')

    #serialization rules
    serialize_rules = ('savedPosts.user',)
    serialize_rules = ('trades.user',)

class Stock(db.Model, SerializerMixin):
    __tablename__ = "stocks"
    
    id = db.Column(db.Integer, primary_key = True)
    company_name = db.Column(db.String, nullable=False)
    symbol = db.Column(db.String, nullable = False)

    #relationships
    trades = db.relationship("Trade", back_populates = "stock")
    user = association_proxy("trades", "user")
    
    # serialization rules
    serialize_rule = ("-trades.stock",)
    
class Post(db.Model, SerializerMixin):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    author = db.Column(db.String)
    year_published =  db.Column(db.String)

    #relationships
    savedPosts = db.relationship ('savedPost', back_populates='post')
    users = association_proxy('savedPosts', 'user')

    #serialization rules
    serialize_rules = ('-savedPosts.post',)

class savedPost(db.Model, SerializerMixin):
    __tablename__ = 'savedPosts'

    id = db.Column(db.Integer, primary_key=True)

    # relationships
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'))

    user = db.relationship('User', back_populates='savedPosts')
    post = db.relationship('Post', back_populates='savedPosts')

    #serialization rules
    serialize_rules = ('-user.savedPosts', '-post.savedPosts')

class Trade(db.Model, SerializerMixin):
    __tablename__ = "trades"
    
    id = db.Column(db.Integer, primary_key = True)
    user_id = db.relationship(db.Integer, db.ForeignKey("users_table.id"))
    stock_id = db.relationship(db.Integer, db.ForeignKey("stocks_table.id"))
    
    # relationships
    users = db.relationship("Owner", back_populates = "trades")
    stocks = db.relationship("Stock", back_populates = "trades")
    
    # serialization rules
    serialize_rule = ("-stock.trades",)
