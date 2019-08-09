from flask import Flask, send_from_directory, jsonify

from lib.model import Model
from lib.prezi_indexer import PerziIndexer

app = Flask(__name__, static_folder="prezi-app/dist", static_url_path="")
model = Model(PerziIndexer.index_json(open("data/prezis.json").read(), index_by='id'))


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/<path:path>')
def static_proxy(path):
    return app.send_static_file(path)


@app.route('/prezi/<id>')
def get_prezi_data(id):
    return jsonify(model[id])


@app.route('/search/<phrase>')
def search_name(phrase):
    return jsonify(model.search(phrase, field_key="title"))


if __name__ == '__main__':
    app.run()
