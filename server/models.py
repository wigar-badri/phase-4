from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
# from sqlalchemy.orm import validates
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
    balance = db.Column(db.Float, nullable=False)

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
    current_value = db.Column(db.Float, nullable=False)

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
    year_published = db.Column(db.Integer, nullable=False)
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
    username = db.Column(db.String, db.ForeignKey('users.username'))
    post_title = db.Column(db.String, db.ForeignKey('posts.title'))

    # relationships
    user = db.relationship('User', back_populates='saved_posts')
    post = db.relationship('Post', back_populates='saved_posts')

    # serialization rules
    serialize_rules = ('-user.saved_posts', '-post.saved_posts')

class Trade(db.Model, SerializerMixin):
    __tablename__ = 'trades'

    id = db.Column(db.Integer, primary_key = True)

    # foreign keys
    username = db.Column(db.String, db.ForeignKey('users.username'))
    stock_symbol = db.Column(db.String, db.ForeignKey('stocks.symbol'))
    amount = db.Column(db.Float, nullable=False)

    # relationships
    user = db.relationship('User', back_populates = 'trades')
    stock = db.relationship('Stock', back_populates = 'trades')

    # serialization rules
    serialize_rules = ('-stock.trades', '-user.trades')

    # @validates('amount')
    # def validate_amount(self, key, amount, user=user, stock=stock):
    #     if amount > user.balance or amount > stock.current_value:
    #         raise ValueError(f'{amount} : This amount is too high. Please select an amount that is lower than both your balance, and the current value of the stock.')
    #     return amount
