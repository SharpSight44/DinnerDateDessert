"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_migrate import Migrate
from flask_swagger import swagger
from api.models import db, User, Desires, UpComing, Memories, Dinner, Dessert, Date
from api.utils import generate_sitemap, APIException
import requests
import os
from argon2 import PasswordHasher
from flask_jwt_extended import create_access_token, jwt_required,get_jwt_identity,JWTManager
from google.oauth2 import id_token

api = Blueprint('api', __name__)
api.config["JWT_SECRET_KEY"] = "very-long-secret-nobody-know" 
jwt = JWTManager(api)


ph = PasswordHasher()






API_KEY = os.environ['API_KEY']
HEADERS = {'Authorization': 'Bearer %s' % API_KEY}


@api.route('/register', methods=['POST'])
def register():
    payload = request.get_json()

    user = User(
        email=payload['email'], 
        password=ph.hash(payload['password']), 
        is_active=True
    )

    db.session.add(user)
    db.session.commit()

    return "user registered", 200

@api.route('/login', methods=['POST'])
def login():
    payload = request.get_json()

    user = User.query.filter(User.email == payload['email']).first()
    if user is None:
        return 'failed-auth', 401

    try:
        ph.verify(user.password, payload['password'])
    except: 
        return 'failed-auth', 401

    token = create_access_token(identity=user.id)
    
    return jsonify({ 'token': token })

@api.route('/deletestack/<int:id>', methods=['DELETE'])
def delete(id):
    upcoming_delete = UpComing.query.get(id)

    try: 
        db.session.delete(upcoming_delete)
        db.session.commit()
        return "good",200
    except:
        return "error"








@api.route('/details/<name>', methods=['GET'])
def handle_FullDetails(name):
    
    r =requests.get('https://api.yelp.com/v3/businesses/'+ str(name), headers=HEADERS)
    run = r.json()
    
    return jsonify(run), 200

@api.route('/event/<name>', methods=['GET'])
def handle_eventDetails(name):
    url= 'https://api.yelp.com/v3/events/' +str(name)
    r =requests.get(url.format(name=name), headers=HEADERS)
    run = r.json()
    
    return jsonify(run), 200

@api.route('/exploredinner/<int:id>', methods=['GET'])
def handle_exdinner(id):
    
    url='https://api.yelp.com/v3/businesses/search?location={id}&radius=10000&limit=10&term=restaurants&categories=dinner&sort_by=rating'
    r =requests.get(url.format(id=id), headers=HEADERS)
    run = r.json()
    
    return jsonify(run), 200


@api.route('/date', methods=['GET'])
def handle_exdate():
    
    
    r =requests.get('https://api.yelp.com/v3/events?location=MIAMI,Florida,33128&radius=10000&start_date=1656646941&limit=10', headers=HEADERS)
    run = r.json()
    
    return jsonify(run), 200

@api.route('/exploredessert/<int:id>', methods=['GET'])
def handle_exdessert(id):
    
    url= 'https://api.yelp.com/v3/businesses/search?location={id}&radius=10000&limit=10&term=dessert&categories=desserts&sort_by=rating'
    r =requests.get(url.format(id=id), headers=HEADERS)
    run = r.json()
    
    return jsonify(run), 200

    

@api.route('/dinner/<int:id>', methods=['GET'])
def handle_dinner(id):
    url= 'https://api.yelp.com/v3/businesses/search?location={id}&radius=1600&limit=21&term=restaurants&categories=dinner&sort_by=rating'
    r =requests.get(url.format(id=id), headers=HEADERS)
    run = r.json()
    
    return jsonify(run), 200


@api.route('/date/<int:id>', methods=['GET'])
def handle_date(id):
    
    url= 'https://api.yelp.com/v3/events?location={id}&radius=1600&end_date=1656646941&limit=21'
    r =requests.get(url.format(id=id), headers=HEADERS)
    run = r.json()
    
    return jsonify(run), 200




@api.route('/dessert/<int:id>', methods=['GET'])
def handle_dessert(id):
    
    url ='https://api.yelp.com/v3/businesses/search?location={id}&radius=3200&limit=21&term=dessert&categories=desserts&sort_by=rating'
    r =requests.get(url.format(id=id), headers=HEADERS)
    run = r.json()
    
    return jsonify(run), 200

@api.route('/upcoming', methods=['POST'])
def handle_upcoming_post():
    payload = request.get_json()
    info = UpComing(dinner=payload["dinner"], dinImg=payload["dinImg"], dinLoc=payload["dinLoc"], dessert=payload["dessert"], desImg=payload["desImg"], desLoc=payload["desLoc"], dateName=payload["dateName"],dateImg=payload["dateImg"],dateDes=payload["dateDes"])
    db.session.add(info)
    db.session.commit()
    return "Successfully Added", 200


@api.route('/desires/dinner', methods=['POST'])
def handle_dinner_post():
    payload = request.get_json()
    info = Dinner(dinner=payload["dinner"],dinImg=payload["dinImg"], dinLoc=payload["dinLoc"], dinRating=payload["dinRating"] )
    db.session.add(info)
    db.session.commit()
    return "Successfully Added", 200

@api.route('/desires/dessert', methods=['POST'])
def handle_dessert_post():
    payload = request.get_json()
    info = Dessert(dessert=payload["dessert"],desImg=payload["desImg"], desLoc=payload["desLoc"], desRating=payload["desRating"] )
    db.session.add(info)
    db.session.commit()
    return "Successfully Added", 200

@api.route('/desires/date', methods=['POST'])
def handle_date_post():
    payload = request.get_json()
    info = Date(date=payload["date"],dateImg=payload["dateImg"], dateDes=payload["dateDes"] )
    db.session.add(info)
    db.session.commit()
    return "Successfully Added", 200

@api.route('/memories', methods=['POST'])
def handle_memories_post():
    payload = request.get_json()
    info = Memories(dinner=payload["dinner"], dinImg=payload["dinImg"], dinLoc=payload["dinLoc"], dessert=payload["dessert"], desImg=payload["desImg"], desLoc=payload["desLoc"], dateName=payload["dateName"],dateImg=payload["dateImg"],dateDes=payload["dateDes"])
    db.session.add(info)
    db.session.commit()
    return "Successfully Added", 200

@api.route('/upcominglist', methods=['GET'])
def handle_upcoming_list():
    uplist = UpComing.query.all()

    response = []
    for u in uplist:
        response.append(u.serialize())
    
    return jsonify(response)

@api.route('/dinnerlist', methods=['GET'])
def handle_dinner_list():
    uplist = Dinner.query.all()

    response = []
    for u in uplist:
        response.append(u.serialize())
    
    return jsonify(response)

@api.route('/datelist', methods=['GET'])
def handle_date_list():
    uplist = Date.query.all()

    response = []
    for u in uplist:
        response.append(u.serialize())
    
    return jsonify(response)

@api.route('/dessertlist', methods=['GET'])
def handle_dessert_list():
    uplist = Dessert.query.all()

    response = []
    for u in uplist:
        response.append(u.serialize())
    
    return jsonify(response)

@api.route('/memorieslist', methods=['GET'])
def handle_memories_list():
    uplist = Memories.query.all()

    response = []
    for u in uplist:
        response.append(u.serialize())
    
    return jsonify(response)

@api.route('/google', methods=['POST'])
def handle_google_post():
    payload = request.get_json()
    token = payload['idtoken']
    try:
        idinfo = id_token.verify_oauth2_token(token, requests.Request(), "396032578158-dv3petmhr394s7fsdcot1aui3g3a363c.apps.googleusercontent.com" )
        userid = idinfo['sub']
        google_name = idinfo['given_name']
        print(google_name)
    except ValueError:
        pass

    return jsonify(google_name), 200