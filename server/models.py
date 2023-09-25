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

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, nullable=False)
    last_name= db.Column(db.String, nullable=False)
    level = db.Column(db.Integer, nullable=False)

class Post(db.Model):
    pass

class Stock(db.Model, SerializerMixin):
    __tablename__ = "stock_table"
    
    id = db.Column(db.Integer, primary_key = True)
    company_name = db.Column(db.String, nullable=False)
    symbol = db.Column(db.String, nullable = False)
    
    trades = db.relationship("Trade", back_populates = "stocks")
    user = association_proxy("trades", "user")
    
    serialize_rule = ("-trades.stocks",)

class savedPost(db.Model):
    pass

class Trade(db.Model, SerializerMixin):
    __tablename__ = "trade_table"
    
    id = db.Column(db.Integer, primary_key = True)
    
    stocks = db.relationship("Stock", back_populates = "trades")
    
    serialize_rule = ("-stocks.trade",)
    
    