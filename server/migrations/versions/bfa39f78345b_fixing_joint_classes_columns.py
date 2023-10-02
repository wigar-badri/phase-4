"""Fixing joint classes columns

Revision ID: bfa39f78345b
Revises: 7230e90aeec9
Create Date: 2023-10-02 16:12:55.809528

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'bfa39f78345b'
down_revision = '7230e90aeec9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('saved_posts', schema=None) as batch_op:
        batch_op.add_column(sa.Column('username', sa.Integer(), nullable=True))
        batch_op.add_column(sa.Column('post_title', sa.Integer(), nullable=True))
        batch_op.drop_constraint('fk_saved_posts_user_id_users', type_='foreignkey')
        batch_op.drop_constraint('fk_saved_posts_post_id_posts', type_='foreignkey')
        batch_op.create_foreign_key(batch_op.f('fk_saved_posts_post_title_posts'), 'posts', ['post_title'], ['title'])
        batch_op.create_foreign_key(batch_op.f('fk_saved_posts_username_users'), 'users', ['username'], ['username'])
        batch_op.drop_column('user_id')
        batch_op.drop_column('post_id')

    with op.batch_alter_table('trades', schema=None) as batch_op:
        batch_op.add_column(sa.Column('username', sa.Integer(), nullable=True))
        batch_op.add_column(sa.Column('stock_symbol', sa.Integer(), nullable=True))
        batch_op.drop_constraint('fk_trades_user_id_users', type_='foreignkey')
        batch_op.drop_constraint('fk_trades_stock_id_stocks', type_='foreignkey')
        batch_op.create_foreign_key(batch_op.f('fk_trades_username_users'), 'users', ['username'], ['username'])
        batch_op.create_foreign_key(batch_op.f('fk_trades_stock_symbol_stocks'), 'stocks', ['stock_symbol'], ['symbol'])
        batch_op.drop_column('user_id')
        batch_op.drop_column('stock_id')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('trades', schema=None) as batch_op:
        batch_op.add_column(sa.Column('stock_id', sa.INTEGER(), nullable=True))
        batch_op.add_column(sa.Column('user_id', sa.INTEGER(), nullable=True))
        batch_op.drop_constraint(batch_op.f('fk_trades_stock_symbol_stocks'), type_='foreignkey')
        batch_op.drop_constraint(batch_op.f('fk_trades_username_users'), type_='foreignkey')
        batch_op.create_foreign_key('fk_trades_stock_id_stocks', 'stocks', ['stock_id'], ['id'])
        batch_op.create_foreign_key('fk_trades_user_id_users', 'users', ['user_id'], ['id'])
        batch_op.drop_column('stock_symbol')
        batch_op.drop_column('username')

    with op.batch_alter_table('saved_posts', schema=None) as batch_op:
        batch_op.add_column(sa.Column('post_id', sa.INTEGER(), nullable=True))
        batch_op.add_column(sa.Column('user_id', sa.INTEGER(), nullable=True))
        batch_op.drop_constraint(batch_op.f('fk_saved_posts_username_users'), type_='foreignkey')
        batch_op.drop_constraint(batch_op.f('fk_saved_posts_post_title_posts'), type_='foreignkey')
        batch_op.create_foreign_key('fk_saved_posts_post_id_posts', 'posts', ['post_id'], ['id'])
        batch_op.create_foreign_key('fk_saved_posts_user_id_users', 'users', ['user_id'], ['id'])
        batch_op.drop_column('post_title')
        batch_op.drop_column('username')

    # ### end Alembic commands ###