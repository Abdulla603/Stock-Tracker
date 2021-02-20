from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(10))
    password = db.Column(db.String(10))
    stocks = db.relationship("Stock", cascade ="delete")
    
    def __init__(self, **kwargs):
        self.username = kwargs.get('username', ' ')
        self.password = kwargs.get('password', ' ')

    def serialize(self):
        return {
            'id': self.id,
            'username': self.username,
            'password': self.password,
            'stocks': [s.serialize() for s in self.stocks]
        }

class Stock(db.Model):
    __tablename__ = "stock"
    id = db.Column(db.Integer, primary_key = True)
    ticker = db.Column(db.String(6))
    entry_price = db.Column(db.String(6))
    shares = db.Column(db.String(6))
    users = db.relationship("User", cascade="delete")
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)

    def __init__(self, **kwargs):
        self.ticker = kwargs.get("ticker", ' ')
        self.entry_price = kwargs.get("entry_price", ' ')
        self.shares = kwargs.get("shares", ' ')
        self.user_id = kwargs.get('user_id',' ')


    def serialize(self):
        return {
            'id': self.id,
            'ticker': self.ticker,
            "entry_price": self.entry_price,
            "shares": self.shares
        }

