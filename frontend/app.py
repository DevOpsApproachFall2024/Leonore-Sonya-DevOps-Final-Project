from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/never')
def never():
    return render_template('giveup.html')

@app.route('/plstwenty')
def twenty():
    return render_template('plstwenty.html')

if __name__ == '__main__':
    app.run(debug=True)