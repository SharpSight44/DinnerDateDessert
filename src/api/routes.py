"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
import requests
import os



api = Blueprint('api', __name__)

API_KEY = os.environ['API_KEY']
HEADERS = {'Authorization': 'Bearer %s' % API_KEY}

@api.route('/leo', methods=['GET'])
def handle_leo():
    
    
    r =requests.get('https://api.yelp.com/v3/businesses/vu6PlPyKptsT6oEq50qOzA', headers=HEADERS)
    run = r.json()
    
    return jsonify(run), 200

@api.route('/karin', methods=['GET'])
def handle_karin():
    
    
    r =requests.get('https://api.yelp.com/v3/businesses/s47-lounge-miami', headers=HEADERS)
    run = r.json()
    
    return jsonify(run), 200


@api.route('/erin', methods=['GET'])
def handle_erin():
    
    
    r =requests.get('https://api.yelp.com/v3/businesses/salt-and-straw-coconut-grove-2?osq=ice+cream', headers=HEADERS)
    run = r.json()
    
    return jsonify(run), 200



@api.route('/event1', methods=['GET'])
def handle_event1():
    
    
    r =requests.get('https://api.yelp.com/v3/businesses/axe-habits-miami-miami?osq=events', headers=HEADERS)
    run = r.json()
    
    return jsonify(run), 200
