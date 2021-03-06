"""empty message

Revision ID: ac0f6a6ef0b1
Revises: dd590d352853
Create Date: 2022-07-09 17:06:14.778615

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ac0f6a6ef0b1'
down_revision = 'dd590d352853'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('date', sa.Column('user_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'date', 'user', ['user_id'], ['id'])
    op.add_column('dessert', sa.Column('user_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'dessert', 'user', ['user_id'], ['id'])
    op.add_column('dinner', sa.Column('user_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'dinner', 'user', ['user_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'dinner', type_='foreignkey')
    op.drop_column('dinner', 'user_id')
    op.drop_constraint(None, 'dessert', type_='foreignkey')
    op.drop_column('dessert', 'user_id')
    op.drop_constraint(None, 'date', type_='foreignkey')
    op.drop_column('date', 'user_id')
    # ### end Alembic commands ###
