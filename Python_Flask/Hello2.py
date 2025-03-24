from flask import Flask
app = Flask(__name__)
@app.route('/')
def home():
    return "This is the Home page."

@app.route('/about')
def about():
    return "This is the About page."

@app.route('/user/<username>')
def show_user_profile(username):
    return f"User Profile Page of {username}"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
