import json
import os

from db import db
from db import User, Stock
from flask import Flask, url_for
from flask import request

db_filename = "app.db"
app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{db_filename}"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_ECHO"] = True

db.init_app(app)
with app.app_context():
    db.create_all()

def success_response(data, code=200):
    return json.dumps({"success": True, "data": data}), code

def failure_response(message, code=404):
    return json.dumps({"success": False, "error": message}), code

@app.route("/")
@app.route("/stocks/")
def get_stocks():
    return success_response([t.serialize() for t in Stock.query.all()])

@app.route ("/users/")
def get_users():
    return success_response([t.serialize() for t in User.query.all()])

@app.route("/users/", methods=["POST"])
def create_user():
    body = json.loads(request.data)
    new_user = User(username = body.get('username'), password = body.get('password'))
    db.session.add(new_user)
    db.session.commit()
    return success_response(new_user.serialize(), 201   )

@app.route("/stocks/", methods=["POST"])
def create_stock():
    body = json.loads(request.data)
    new_stock = Stock(ticker = body.get('ticker'),)
    db.session.commit()
    return success_response(new_stock.serialize(), 201)

@app.route("/users/<int:user_id>/", methods=["POST"])
def update_user(user_id):
    body = json.loads(request.data)
    user = User.query.filter_by(id = user_id).first()
    if user is None:
        return failure_response('User not found')
    user.password = body.get('password', user.password)
    db.session.commit()
    return success_response(user.serialize())

@app.route("/users/<int:user_id>/stocks/<int:stock_id>/", methods=["POST"])
def update_ticker(user_id,stock_id):
    body = json.loads(request.data)
    user = User.query.filter_by(id = user_id).first()
    if user is None:
        return failure_response('User not found')
    stock = Stock.query.filter_by(id = stock_id).first()
    if stock is None:
        return failure_response('Tciker not found')
    stock.ticker = body.get('ticker', stock.ticker)
    db.session.commit()
    return success_response(stock.serialize())

@app.route("/users/<int:user_id>/", methods=["DELETE"])
def delete_user(user_id):
    user = User.query.filter_by(id = user_id).first()
    if user is None:
        return failure_response('User not found')
    db.session.delete(user)
    db.session.commit()
    return success_response(user.serialize())

@app.route("/users/<int:user_id>/stocks/<int:stock_id>/", methods=["DELETE"])
def delete_stock(user_id,stock_id):
    user = User.query.filter_by(id = user_id).first()
    if user is None:
        return failure_response('User not found')
    stock = Stock.query.filter_by(id=stock_id).first()
    if Stock is None:
        return failure_response("Ticker not found!")
    db.session.delete(ticker)
    db.session.commit()
    return success_response(stock.serialize())

@app.route("/users/<int:user_id>/stocks/", methods=["POST"])
def assign_stocks(user_id): 
    user = User.query.filter_by(id = user_id).first()
    if user is None:
        return failure_response('User not found')
    body = json.loads(request.data)
    ticker = body.get('ticker')
    entry_price = body.get('entry_price')
    new_stock = Stock(ticker = ticker, entry_price = entry_price, user_id = user_id)
    db.session.add(new_stock)
    db.session.commit()
    return success_response(new_stock.serialize())

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 4000))
    app.run(host= "0.0.0.0", port= port)
