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
    username = db.Column(db.String, nullable=False, unique=True)
    password = db.Column(db.String, nullable=False)
    first_name = db.Column(db.String, nullable=False)
    last_name= db.Column(db.String, nullable=False)
    level = db.Column(db.Integer, nullable=False)

    # relationships & associations
    saved_posts = db.relationship('SavedPost', back_populates='user')
    posts = association_proxy('saved_posts', 'post')

    trades = db.relationship('Trade', back_populates='user')
    stocks = association_proxy('trades', 'stock')

    # serialization rules
    serialize_rules = ('-saved_posts.user', '-trades.user')

class Stock(db.Model, SerializerMixin):
    __tablename__ = 'stocks'

    id = db.Column(db.Integer, primary_key = True)
    company_name = db.Column(db.String, nullable=False)
    symbol = db.Column(db.String, nullable = False)
    current_value = db.Column(db.Float)

    # relationships & associations
    trades = db.relationship('Trade', back_populates='stock')
    users = association_proxy('trades', 'user')

    # serialization rules
    serialize_rules = ('-trades.stock',)

class Post(db.Model, SerializerMixin):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    author = db.Column(db.String, nullable=False)
    content = db.Column(db.String, nullable = False)

    # relationships & associations
    saved_posts = db.relationship ('SavedPost', back_populates='post')
    users = association_proxy('saved_posts', 'user')

    # serialization rules
    serialize_rules = ('-saved_posts.post',)

class SavedPost(db.Model, SerializerMixin):
    __tablename__ = 'saved_posts'

    id = db.Column(db.Integer, primary_key=True)

    # foreign keys
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'))

    # relationships
    user = db.relationship('User', back_populates='saved_posts')
    post = db.relationship('Post', back_populates='saved_posts')

    # serialization rules
    serialize_rules = ('-user.saved_posts', '-post.saved_posts')

class Trade(db.Model, SerializerMixin):
    __tablename__ = 'trades'

    id = db.Column(db.Integer, primary_key = True)

    # foreign keys
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    stock_id = db.Column(db.Integer, db.ForeignKey('stocks.id'))

    # relationships
    user = db.relationship('User', back_populates = 'trades')
    stock = db.relationship('Stock', back_populates = 'trades')

    # serialization rules
    serialize_rules = ('-stock.trades', '-user.trades')
