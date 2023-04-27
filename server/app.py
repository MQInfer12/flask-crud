from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

from products import products

@app.route('/product', methods=["GET"])
def getProducts():
  return jsonify(products)

@app.route('/product/<int:id>', methods=["GET"])
def getProduct(id):
  productFound = [product for product in products if product["id"] == id]
  if len(productFound) > 0:
    return jsonify(productFound[0])
  return jsonify({"message": "product not found"})

@app.route('/product', methods=["POST"])
def postProduct():
  if len(products) > 0:
    newId = products[len(products) - 1]["id"] + 1
  else:
    newId = 1
  
  newProduct = {
    "id": newId,
    "name": request.json["name"],
    "price": request.json["price"],
    "stock": request.json["stock"]
  }
  products.append(newProduct)
  return jsonify({"message": "product added", "data": products})

@app.route('/product/<int:id>', methods=["PUT"])
def putProduct(id):
  productFound = [product for product in products if product["id"] == id]
  if len(productFound) > 0:
    productFound[0]["name"] = request.json["name"]
    productFound[0]["price"] = request.json["price"]
    productFound[0]["stock"] = request.json["stock"]
    return jsonify({"message": "product modified", "data": products})
  return jsonify({"message": "product not found"})

@app.route('/product/<int:id>', methods=["DELETE"])
def deleteProduct(id):
  productFound = [product for product in products if product["id"] == id]
  if len(productFound) > 0:
    products.remove(productFound[0])
    return jsonify({"message": "product deleted", "data": products})
  return jsonify({"message": "product not found"})

@app.route('/')
def ping():
  return jsonify({"message": "hello world from Flask!"})

if __name__ == '__main__':
  app.run(debug=True, port=5000)