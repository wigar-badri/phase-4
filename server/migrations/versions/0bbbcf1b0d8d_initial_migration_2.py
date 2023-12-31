"""Initial Migration 2

Revision ID: 0bbbcf1b0d8d
Revises: 
Create Date: 2023-09-26 14:54:03.561802

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0bbbcf1b0d8d'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('posts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(), nullable=False),
    sa.Column('author', sa.String(), nullable=False),
    sa.Column('year_published', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('stocks',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('company_name', sa.String(), nullable=False),
    sa.Column('symbol', sa.String(), nullable=False),
    sa.Column('current_value', sa.Float(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('trades',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(), nullable=False),
    sa.Column('password', sa.String(), nullable=False),
    sa.Column('first_name', sa.String(), nullable=False),
    sa.Column('last_name', sa.String(), nullable=False),
    sa.Column('level', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('saved_posts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('post_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['post_id'], ['posts.id'], name=op.f('fk_saved_posts_post_id_posts')),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_saved_posts_user_id_users')),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('saved_posts')
    op.drop_table('users')
    op.drop_table('trades')
    op.drop_table('stocks')
    op.drop_table('posts')
    # ### end Alembic commands ###
