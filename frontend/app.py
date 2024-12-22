from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/informative')
def informative():
    return render_template('informative.html')

@app.route('/queerPeople')
def queer_people():
    return render_template('queerPeople.html')

if __name__ == '__main__':
    app.run(debug=True)