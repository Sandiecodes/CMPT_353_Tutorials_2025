# A simple HTML form for demonstration (using Flask's render_template_string)
form_html = """
<!DOCTYPE html>
<html>
<head>
<title>POST Example</title>
</head>
<body>
<h1>POST Example</h1>
<form method="POST" action="/submit">
<label for="name">Name:</label>
<input id="name" name="name" type="text" />
<button type="submit">Submit</button>
</form>
</body>
</html>
"""
from flask import Flask, request, render_template_string
app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    # Render a minimal HTML form
    return render_template_string(form_html)

@app.route('/submit', methods=['GET', 'POST'])
def submit():
    if request.method == 'POST':
        # Access data submitted via the form (e.g., 'name' field)
        name = request.form.get('name', 'Unknown')
        return f"Received POST request! Your name is: {name}"
    else:
        # If a GET request is made to '/submit'
        return "Please submit the form instead of using GET."

if __name__ == '__main__':
    app.run(debug=True)

