  
import os
from flask_admin import Admin
from .models import db, User, Dinner, Fridate, Dessert, UpComing, Desires, Memories;
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Dinner, db.session))
    admin.add_view(ModelView(Fridate, db.session))
    admin.add_view(ModelView(Dessert, db.session))
    admin.add_view(ModelView(Desires, db.session))
    admin.add_view(ModelView(UpComing, db.session))
    admin.add_view(ModelView(Memories, db.session))

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))