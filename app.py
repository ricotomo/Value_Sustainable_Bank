from flask import Flask, render_template, request
import requests
import os

app = Flask(__name__)

#airtable config
base_key = 'XYZ'
table_name = 'waiters'
api_key="XYZ"
endpoint=f'https://api.airtable.com/v0/{base_key}/{table_name}'

def writeairtable(name, email, email_subscription, resident):
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
                "Subscription": email_subscription,
                "Residency": resident,
                "Launch": "Subscribed"
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
            email_subscription = result.get("subscribe")
            resident = result.get("resident")
            try:
                writeairtable(name, email, email_subscription, resident)
                return render_template("success.html"), {"Refresh": "3; url=/"}
            except:
                return render_template("error.html"), {"Refresh": "15; url=/"}
        else:
            return render_template("error.html"), {"Refresh": "15; url=/"}

if __name__ == '__main__':
    app.run()
