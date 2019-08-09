import json


class PerziIndexer:
    @staticmethod
    def index_json(json_string, index_by='id'):
        return {prezi[index_by]: prezi for prezi in json.loads(json_string)}
