from app import app
from flask import Flask, render_template, request, url_for
import requests


@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/booksRecommended', methods=['POST'])
def booksRecommended():
    bookSearch = request.form['bookSearch']
    response = requests.get('https://www.googleapis.com/books/v1/volumes?q={}&key=AIzaSyDcv4S4qWVritDGFPwMUKNRlVqs4G28UqQ'.format(bookSearch))
    if response.status_code == 200:
        respjson = response.json()
        print (respjson)
        try:
            if respjson["items"][0]["accessInfo"]["embeddable"] != '' and respjson["items"][0]["accessInfo"]["embeddable"] == True:
    #     # if respjson.items[0].accessInfo.embeddable == True:
                ISBN = respjson["items"][0]["volumeInfo"]["industryIdentifiers"][1]["identifier"]
    #         # ISBN = respjson.items[0].volumeInfo.industryIdentifiers[1].identifier
                return render_template('bookDisplay.html', ISBN=ISBN)
        except:
            return render_template('bookNotFound.html')
    return render_template('bookNotFound.html', bookSearch=bookSearch)


@app.route('/bookDisplay', methods=['POST', 'GET'])
def bookDisplay():
    return render_template('bookDisplay.html')


@app.route('/bookNotFound', methods=['POST', 'GET'])
def bookNotFound():
    def returnhome():
        if request.form['returnHome']:
            render_template('index.html')
    return render_template('bookNotFound.html')


@app.route('/secretNotes')
def secretNotes():
    return render_template('secretNotes.html')


if __name__ == '__main__':
    app.run(debug=True);
