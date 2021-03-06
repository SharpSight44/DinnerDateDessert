"""empty message

Revision ID: dd590d352853
Revises: 6016645562ac
Create Date: 2022-07-07 06:11:45.971070

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'dd590d352853'
down_revision = '6016645562ac'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('fridate', 'time')
    op.alter_column('user', 'password',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=300),
               existing_nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'password',
               existing_type=sa.String(length=300),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)
    op.add_column('fridate', sa.Column('time', sa.VARCHAR(length=120), autoincrement=False, nullable=True))
    # ### end Alembic commands ###
