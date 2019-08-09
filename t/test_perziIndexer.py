from unittest import TestCase
from lib.prezi_indexer import PerziIndexer
import json


class TestPerziIndexer(TestCase):
    def test_index_json(self):
        self.assertEqual(PerziIndexer.index_json('[{"a":2,"b":4}]', 'a'), {2: {"a": 2, "b": 4}})

        with self.assertRaises(KeyError):
            PerziIndexer.index_json('[{"a":2,"b":4}]', 'c')

        with self.assertRaises(json.decoder.JSONDecodeError):
            PerziIndexer.index_json('[{1:2,"b":4}]', 'c')
