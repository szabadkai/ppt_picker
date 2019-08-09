class Model:
    def __init__(self, data):
        """Stores data and keeps it searchable.

        Expects data in dictionary<id:item> format."""
        self._data = data

    def __getitem__(self, item):
        return self._data[item]

    def search(self, phrase, field_key):
        """Searches selected field of items for match

        specify search phrase with phrase and """
        return {prezi["id"]: prezi for prezi in self._data.values() if
                phrase.lower() in prezi.get(field_key).lower()} if phrase else dict()
