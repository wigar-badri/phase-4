#!/usr/bin/env python3

import csv
import random
import string
import json

from faker import Faker
from random import choice as rc
from random import uniform as randunif
from string import ascii_uppercase

from app import app
from models import db, User, Post, Stock, Trade, SavedPost

fake = Faker()

def create_users(rows):
    users = []
    for _ in range(rows):
        user = User(
            username = fake.email(),
            password = fake.address(),
            first_name = fake.first_name(),
            last_name = fake.last_name(),
            level = random.randint(1, 3),
            balance = round((randunif(0, 10000)), 2)
        )
        users.append(user)
    return users

def create_posts(rows):
    posts = []

    # Opening JSON file
    # f = open('articles.json')

    # returns JSON object as
    # a dictionary
    # data = json.load(f)

    # Iterating through the json
    # list
    # for i in data['articles']:
    for _ in range(rows):
        post = Post(
            title = fake.country(),
            author = fake.name(),
            year_published = fake.year(),
            content = fake.address()
        )
        posts.append(post)

    # Closing file
    # f.close()
    return posts

def create_stocks(rows):
    def stock_generator(size=4, chars=ascii_uppercase):
        return ''.join(rc(chars) for _ in range(size))

    stocks = []
    for _ in range(rows):
        stock = Stock(
            company_name = fake.company(),
            symbol = stock_generator(),
            current_value = round((randunif(0, 10000)), 3)
        )
        stocks.append(stock)
    return stocks

def create_trades(rows, users, stocks):
    trades = []
    for _ in range(rows):
        user = rc(users)
        stock = rc(stocks)
        tr = Trade(
            username = user.username,
            stock_symbol = stock.symbol,
            amount = round((randunif(0, (user.balance if user.balance < stock.current_value else stock.current_value))), 2)
        )
        trades.append(tr)
    return trades

def create_saved_posts(rows, users, posts):
    saved_posts = []
    for _ in range(rows):
        sp = SavedPost(
            username = rc(users).username,
            post_title = rc(posts).title
        )
        saved_posts.append(sp)
    return saved_posts

if __name__ == '__main__':

    with app.app_context():

        print ('Clearing database ...')
        User.query.delete()
        Post.query.delete()
        Stock.query.delete()
        Trade.query.delete()
        SavedPost.query.delete()

        print('Seeding users ...')
        users = create_users(10)
        db.session.add_all(users)
        db.session.commit()

        print('Seeding posts ...')
        posts = create_posts(15)
        db.session.add_all(posts)
        db.session.commit()

        print('Seeding stocks ...')
        stocks = create_stocks(5)
        db.session.add_all(stocks)
        db.session.commit()

        print('Seeding trades ...')
        trades = create_trades(20, users, stocks)
        db.session.add_all(trades)
        db.session.commit()

        print('Seeding saved_posts ...')
        saved_posts = create_saved_posts(20, users, posts)
        db.session.add_all(saved_posts)
        db.session.commit()

        print('Done seeding !!!')
