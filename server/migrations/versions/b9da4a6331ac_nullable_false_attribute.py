"""nullable=False attribute

Revision ID: b9da4a6331ac
Revises: 31de7026cd63
Create Date: 2023-09-28 16:40:28.712344

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b9da4a6331ac'
down_revision = '31de7026cd63'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('trades', schema=None) as batch_op:
        batch_op.alter_column('amount',
               existing_type=sa.FLOAT(),
               nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('trades', schema=None) as batch_op:
        batch_op.alter_column('amount',
               existing_type=sa.FLOAT(),
               nullable=True)

    # ### end Alembic commands ###
