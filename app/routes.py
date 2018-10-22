from app import app
from flask import Flask, render_template, request
import requests



@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/booksRecommended', methods=['POST'])
def booksRecommended():
    bookSearch = request.form['bookSearch']
    return render_template('booksRecommended.html', bookSearch=bookSearch)


if __name__ == '__main__':
    app.run(debug=True);
