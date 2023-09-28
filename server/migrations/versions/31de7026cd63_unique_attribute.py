"""Unique attribute

Revision ID: 31de7026cd63
Revises: 61c74d54dfa4
Create Date: 2023-09-28 16:39:42.651805

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '31de7026cd63'
down_revision = '61c74d54dfa4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('stocks', schema=None) as batch_op:
        batch_op.alter_column('current_value',
               existing_type=sa.FLOAT(),
               nullable=False)

    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('balance',
               existing_type=sa.FLOAT(),
               nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('balance',
               existing_type=sa.FLOAT(),
               nullable=True)

    with op.batch_alter_table('stocks', schema=None) as batch_op:
        batch_op.alter_column('current_value',
               existing_type=sa.FLOAT(),
               nullable=True)

    # ### end Alembic commands ###
