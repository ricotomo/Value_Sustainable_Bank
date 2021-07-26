from flask import Flask, render_template, request
import requests
import os

app = Flask(__name__)

#airtable config
base_key = 'apphtQSknY9Ue3L2j'
table_name = 'waiters'
api_key="key5zzo3pttC12yCF"
endpoint=f'https://api.airtable.com/v0/{base_key}/{table_name}'

def writeairtable(name, email):
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    data = {
    "records": [
            {
            "fields": {
                "Full Name": name,
                "Email": email,
                "Status": "Subscribed"
                }
            }
        ]
    }
    try:
        r = requests.post(endpoint, json=data, headers=headers)
        return("Write successful")
    except:
        return("Write error")


@app.route("/")
def index():
    return render_template('index.html')


@app.route('/api/waitlist',methods = ['POST', 'GET'])
def register():
    if request.method == 'POST':
        result = request.form

        if result.get("name") != "" and result.get("email") != "":
            name = result.get("name")
            email = result.get("email")
            try:
                writeairtable(name, email)
                return render_template("success.html")
            except:
                return render_template("error.html")
        else:
            return render_template("error.html")

if __name__ == '__main__':
    app.run()