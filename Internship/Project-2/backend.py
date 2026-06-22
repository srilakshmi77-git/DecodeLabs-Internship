from flask import Flask, request, jsonify

app = Flask(__name__)

users = []

# GET API
@app.route('/users', methods=['GET'])
def get_users():
    return jsonify(users)

# POST API
@app.route('/users', methods=['POST'])
def add_user():

    data = request.get_json()

    for name in data['names']:
        user = {
            "id": len(users) + 1,
            "name": name,
           
        }
        users.append(user)

    return jsonify({
        "message": "Users added successfully",
        "users": users
    })

app.run(debug=True)