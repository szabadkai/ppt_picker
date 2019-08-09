from unittest import TestCase
from lib import model


class TestModel(TestCase):
    def test_object_creation(self):
        m = model.Model(data={"hello": "world"})
        self.assertIsInstance(m, model.Model)
        self.assertEqual(m._data, {"hello": "world"})

    def test_search(self):
        m = model.Model(data={"hello": {"id": 1, "a": "aaa"}, "no": {"id": 2, "a": "bba"}})
        self.assertEqual(m.search("", field_key="a"), {})  # test if empty string doesn't return everithing
        self.assertEqual(m.search("aa", field_key="a"),
                         {1: {"id": 1, "a": "aaa"}})  # test if search finds matching item
        self.assertEqual(m.search("x", field_key="a"), {})  # test if not matching phrase return empty result
