"""empty message

Revision ID: c555ad515c7c
Revises: 39feb1bb384a
Create Date: 2022-07-04 22:01:59.111473

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c555ad515c7c'
down_revision = '39feb1bb384a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('upcoming',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('dinner', sa.String(length=200), nullable=True),
    sa.Column('dessert', sa.String(length=200), nullable=True),
    sa.Column('dateName', sa.String(length=200), nullable=True),
    sa.Column('dateImg', sa.String(length=200), nullable=True),
    sa.Column('dateDes', sa.String(length=200), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_table('upComing')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('upComing',
    sa.Column('id', sa.INTEGER(), server_default=sa.text('nextval(\'"upComing_id_seq"\'::regclass)'), autoincrement=True, nullable=False),
    sa.Column('dinner', sa.VARCHAR(length=200), autoincrement=False, nullable=True),
    sa.Column('dessert', sa.VARCHAR(length=200), autoincrement=False, nullable=True),
    sa.Column('dateName', sa.VARCHAR(length=200), autoincrement=False, nullable=True),
    sa.Column('dateImg', sa.VARCHAR(length=200), autoincrement=False, nullable=True),
    sa.Column('dateDes', sa.VARCHAR(length=200), autoincrement=False, nullable=True),
    sa.Column('user_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], name='upComing_user_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='upComing_pkey')
    )
    op.drop_table('upcoming')
    # ### end Alembic commands ###
