"""empty message

Revision ID: 516de346493f
Revises: 
Create Date: 2022-07-05 17:18:26.637413

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '516de346493f'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('dessert',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=120), nullable=True),
    sa.Column('image1', sa.String(length=200), nullable=True),
    sa.Column('image2', sa.String(length=200), nullable=True),
    sa.Column('image3', sa.String(length=200), nullable=True),
    sa.Column('location', sa.String(length=120), nullable=True),
    sa.Column('time', sa.String(length=120), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('dinner',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=120), nullable=True),
    sa.Column('image1', sa.String(length=200), nullable=True),
    sa.Column('image2', sa.String(length=200), nullable=True),
    sa.Column('image3', sa.String(length=200), nullable=True),
    sa.Column('location', sa.String(length=120), nullable=True),
    sa.Column('time', sa.String(length=120), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('fridate',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=120), nullable=True),
    sa.Column('image1', sa.String(length=200), nullable=True),
    sa.Column('image2', sa.String(length=200), nullable=True),
    sa.Column('image3', sa.String(length=200), nullable=True),
    sa.Column('location', sa.String(length=120), nullable=True),
    sa.Column('time', sa.String(length=120), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('desires',
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
    op.create_table('memories',
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
    op.create_table('upcoming',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('dinner', sa.String(length=200), nullable=True),
    sa.Column('dinImg', sa.String(length=200), nullable=True),
    sa.Column('dinLoc', sa.String(length=200), nullable=True),
    sa.Column('dessert', sa.String(length=200), nullable=True),
    sa.Column('desImg', sa.String(length=200), nullable=True),
    sa.Column('desLoc', sa.String(length=200), nullable=True),
    sa.Column('dateName', sa.String(length=200), nullable=True),
    sa.Column('dateImg', sa.String(length=200), nullable=True),
    sa.Column('dateDes', sa.String(length=200), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('upcoming')
    op.drop_table('memories')
    op.drop_table('desires')
    op.drop_table('user')
    op.drop_table('fridate')
    op.drop_table('dinner')
    op.drop_table('dessert')
    # ### end Alembic commands ###