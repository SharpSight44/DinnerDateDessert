"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS, cross_origin
from api.utils import APIException, generate_sitemap
from api.models import db, User
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from flask_jwt_extended import create_access_token, jwt_required,get_jwt_identity,JWTManager
from google.oauth2 import id_token
from google.auth.transport import requests


#from models import Person

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
CORS(app, resources={r"*": {"origins": "*"}})
app.url_map.strict_slashes = False

# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type = True)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)
app.config["JWT_SECRET_KEY"] = "very-long-secret-nobody-know" 
jwt = JWTManager(app)
# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response
@app.route('/google', methods=['POST'])
def handle_google_post():
    payload = request.get_json()
    token = payload['idtoken']
    try:
        idinfo = id_token.verify_oauth2_token(token, requests.Request(), "396032578158-dv3petmhr394s7fsdcot1aui3g3a363c.apps.googleusercontent.com" )
        userid = idinfo['sub']
        google_name = idinfo['given_name']
        gmail = idinfo['email']
        
    except ValueError:
        pass
    parse_id = userid[-3:]
    user = User.query.filter(User.email == gmail ).first()
    new_user = User(id=parse_id, email=gmail, password=idinfo['jti'], is_active=True)
    token = create_access_token(identity=parse_id)
    if user is None:
        db.session.add(new_user)
        db.session.commit()

        return jsonify({'token':token})

    

    return jsonify({'token':token})

# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
