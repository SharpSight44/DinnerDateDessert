"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Dinner, Fridate, Dessert
from api.utils import generate_sitemap, APIException


api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/dinner', methods=['GET'])
def handle_dinner():
    din = Dinner.query.all()

    response = []
    for d in din:
        response.append(d.serialize())
    
    return jsonify(response), 200



@api.route('/dessert', methods=['GET'])
def handle_dessert():
    des = Dessert.query.all()

    response = []
    for d in des:
        response.append(d.serialize())
    
    return jsonify(response), 200


@api.route('/fridate', methods=['GET'])
def handle_fridate():
    din = Fridate.query.all()

    response = []
    for d in din:
        response.append(d.serialize())
    
    return jsonify(response), 200