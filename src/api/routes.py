"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Desires, UpComing, Memories
from api.utils import generate_sitemap, APIException
import requests
import os



api = Blueprint('api', __name__)

API_KEY = os.environ['API_KEY']
HEADERS = {'Authorization': 'Bearer %s' % API_KEY}



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

@api.route('/exploredinner', methods=['GET'])
def handle_exdinner():
    
    
    r =requests.get('https://api.yelp.com/v3/businesses/search?location=miami,fl,33130&radius=10000&limit=10&term=restaurants&categories=dinner&sort_by=rating', headers=HEADERS)
    run = r.json()
    
    return jsonify(run), 200


@api.route('/date', methods=['GET'])
def handle_exdate():
    
    
    r =requests.get('https://api.yelp.com/v3/events?location=MIAMI,Florida,33128&radius=10000&start_date=1656646941&limit=10', headers=HEADERS)
    run = r.json()
    
    return jsonify(run), 200

@api.route('/exploredessert', methods=['GET'])
def handle_exdessert():
    
    
    r =requests.get('https://api.yelp.com/v3/businesses/search?location=MIAMI,Florida,33130&radius=10000&limit=10&term=dessert&categories=desserts&sort_by=rating', headers=HEADERS)
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
    info = UpComing(dinner=payload["dinner"], dessert=payload["dessert"], dateName=payload["dateName"],dateImg=payload["dateImg"],dateDes=payload["dateDes"])
    db.session.add(info)
    db.session.commit()
    return "Successfully Added", 200


@api.route('/desires', methods=['POST'])
def handle_desires_post():
    payload = request.get_json()
    info = Desires(dinner=payload["dinner"], dessert=payload["dessert"], dateName=payload["dateName"],dateImg=payload["dateImg"],dateDes=payload["dateDes"])
    db.session.add(info)
    db.session.commit()
    return "Successfully Added", 200

@api.route('/memories', methods=['POST'])
def handle_memories_post():
    payload = request.get_json()
    info = Memories(dinner=payload["dinner"], dessert=payload["dessert"], dateName=payload["dateName"],dateImg=payload["dateImg"],dateDes=payload["dateDes"])
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