
import requests

url = "http://127.0.0.1:5000/users"

data = {
    "names": ["Lakshmi", "Ravi", "Kalyan"]   
}

response = requests.post(url, json=data)

print(response.json())