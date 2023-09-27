#!/usr/bin/env python3

import csv
import random
import string

from faker import Faker
#from math import round_nearest
from random import choice as rc
from random import uniform as runif
from string import ascii_uppercase

from app import app
from models import db, User, Post, Stock

fake = Faker()

def create_users():
    users = []
    for _ in range (10):
        user = User(
            username = fake.email(),
            password = fake.address(),
            first_name = fake.first_name(),
            last_name = fake.last_name(),
            level = random.randint(1, 3)
        )
        users.append(user)

    return users

def create_posts():
    posts = []
    for _ in range (10):
        post = Post(
            title = fake.country(),
            author = fake.name(),
            year_published = fake.year(),
        )
        posts.append(post)

    return posts

def create_stocks():

    def stock_generator(size=4, chars=ascii_uppercase):
        return ''.join(rc(chars) for _ in range(size))

    stocks = []
    # fake_stock_symbols = ["AAPL", "GOOGL", "MSFT", "AMZN", "FB", "NFLX", "NVDA", "INTC", "IBM"]

    for _ in range (5):
        stock = Stock(
            company_name = fake.company(),
            symbol = stock_generator(),
            current_value = round((runif(0, 10000)), 3)
        )
        stocks.append(stock)

    return stocks

if __name__ == '__main__':

    with app.app_context():
        print ('Clearing database ...')
        User.query.delete()
        Stock.query.delete()
        Post.query.delete()

        print('Seeding users ...')
        users = create_users()
        db.session.add_all(users)
        db.session.commit()

        print('Seeding stocks ...')
        stocks = create_stocks()
        db.session.add_all(stocks)
        db.session.commit()

        print('Seeding posts ...')
        posts = create_posts()
        db.session.add_all(posts)
        db.session.commit()

        print('Done seeding !!')
