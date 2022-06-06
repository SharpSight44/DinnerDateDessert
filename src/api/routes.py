"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Dinner, Fridate, Dessert
from api.utils import generate_sitemap, APIException
import requests 
import os


api = Blueprint('api', __name__)

API_KEY = 'YvZ1UtZpTS4MZLRlm_TfmS5QbZH8ce05UpqsVzd1HXw3e08JboJRoFCz6iW7MJXW6-WzXzgsKeLLGxDiQohJaI8RfaMI-8A-3qG_6QL1sc_iU1Al19J1ki5I72qbYnYx'
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