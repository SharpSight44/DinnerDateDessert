from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class UpComing(db.Model):
    __tablename__ = 'upComing'
    id = db.Column(db.Integer, primary_key=True)
    dinner = db.Column(db.String(200))
    dessert = db.Column(db.String(200))
    dateName = db.Column(db.String(200), nullable=True)
    dateImg = db.Column(db.String(200), nullable=True)
    dateDes = db.Column(db.String(200), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship('User')

    def __repr__(self):
        return f"<UpComing {self.id}>"
    
    def serialize(self):
        return {
            'id': self.id,
            'dinner': self.dinner,
            'dessert': self.dessert,
            'dateName': self.dateName,
            'dateDes': self.dateDes
        }

class Desires(db.Model):
    __tablename__ = 'desires'
    id = db.Column(db.Integer, primary_key=True)
    dinner = db.Column(db.String(200))
    dessert = db.Column(db.String(200))
    dateName = db.Column(db.String(200), nullable=True)
    dateImg = db.Column(db.String(200), nullable=True)
    dateDes = db.Column(db.String(200), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship('User')

    def __repr__(self):
        return f"<Desires {self.id}>"
    
    def serialize(self):
        return {
            'id': self.id,
            'dinner': self.dinner,
            'dessert': self.dessert,
            'dateName': self.dateName,
            'dateDes': self.dateDes
        }

class Memories(db.Model):
    __tablename__ = 'memories'
    id = db.Column(db.Integer, primary_key=True)
    dinner = db.Column(db.String(200))
    dessert = db.Column(db.String(200))
    dateName = db.Column(db.String(200), nullable=True)
    dateImg = db.Column(db.String(200), nullable=True)
    dateDes = db.Column(db.String(200), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship('User')

    def __repr__(self):
        return f"<UpComing {self.id}>"
    
    def serialize(self):
        return {
            'id': self.id,
            'dinner': self.dinner,
            'dessert': self.dessert,
            'dateName': self.dateName,
            'dateDes': self.dateDes
        }        

class Dinner(db.Model):
    __tablename__ = 'dinner'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120))
    image1 = db.Column(db.String(200))
    image2 = db.Column(db.String(200))
    image3 = db.Column(db.String(200))
    location = db.Column(db.String(120))
    time = db.Column(db.String(120))

    def __repr__(self):
        return self.title

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "image1": self.image1,
            "image2": self.image2,
            "image3": self.image3,
            "location": self.location,
            "time": self.time
            # do not serialize the password, its a security breach
        }
class Fridate(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120))
    image1 = db.Column(db.String(200))
    image2 = db.Column(db.String(200))
    image3 = db.Column(db.String(200))
    location = db.Column(db.String(120))
    time = db.Column(db.String(120))

    def __repr__(self):
        return f'<Fridate {self.title}>'

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "image1": self.image1,
            "image2": self.image2,
            "image3": self.image3,
            "location": self.location,
            "time": self.time
            # do not serialize the password, its a security breach
        }
class Dessert(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120))
    image1 = db.Column(db.String(200))
    image2 = db.Column(db.String(200))
    image3 = db.Column(db.String(200))
    location = db.Column(db.String(120))
    time = db.Column(db.String(120))

    def __repr__(self):
        return f'<Dessert {self.title}>'

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "image1": self.image1,
            "image2": self.image2,
            "image3": self.image3,
            "location": self.location,
            "time": self.time
            # do not serialize the password, its a security breach
        }