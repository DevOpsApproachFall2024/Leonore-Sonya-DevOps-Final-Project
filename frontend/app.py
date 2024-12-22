from flask import Flask, render_template, request
import requests

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, World!'


@app.route('/factorial', methods=['GET', 'POST'])
def factorial_page():
    if request.method == 'POST':
        number = request.form.get('number')

        # Validate input
        if not number or not number.isdigit() or int(number) < 0:
            return render_template('factorial.html', error="Please enter a valid non-negative integer.")

        try:
            # Send a request to the Express backend
            response = requests.get(f'http://localhost:3000/factorial/{number}')
            response.raise_for_status()  # Raise an exception for HTTP errors
            data = response.json()

            # Render the page with the result from the backend
            return render_template('factorial.html', result=data['factorial'], number=number)

        except requests.exceptions.RequestException as e:
            # Handle connection errors
            return render_template('factorial.html', error=f"Error connecting to the backend: {e}")

    # For GET requests, just render the form
    return render_template('factorial.html')
    
if __name__ == '__main__':
    app.run(debug=True)