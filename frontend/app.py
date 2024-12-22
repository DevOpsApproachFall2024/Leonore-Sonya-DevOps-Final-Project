from flask import Flask
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/tony')
def tony():
    return render_template('tony.html')

if __name__ == '__main__':
    app.run(debug=True)