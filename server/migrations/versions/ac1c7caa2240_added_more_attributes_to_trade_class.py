"""Added more attributes to Trade class

Revision ID: ac1c7caa2240
Revises: b9da4a6331ac
Create Date: 2023-09-28 16:47:40.121318

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ac1c7caa2240'
down_revision = 'b9da4a6331ac'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('trades', schema=None) as batch_op:
        batch_op.add_column(sa.Column('user_balance', sa.Float(), nullable=True))
        batch_op.add_column(sa.Column('stock_current_value', sa.Float(), nullable=True))
        batch_op.create_foreign_key(batch_op.f('fk_trades_stock_current_value_stocks'), 'stocks', ['stock_current_value'], ['current_value'])
        batch_op.create_foreign_key(batch_op.f('fk_trades_user_balance_users'), 'users', ['user_balance'], ['balance'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('trades', schema=None) as batch_op:
        batch_op.drop_constraint(batch_op.f('fk_trades_user_balance_users'), type_='foreignkey')
        batch_op.drop_constraint(batch_op.f('fk_trades_stock_current_value_stocks'), type_='foreignkey')
        batch_op.drop_column('stock_current_value')
        batch_op.drop_column('user_balance')

    # ### end Alembic commands ###