const { Map } = require('immutable');

const page1 = {
  'user-1': {
    id: 1,
    name: 'test',
    likes: {
      1: {
        uid: 1234,
      }
    }
  },
};

const page2 = {
  'user-1': {
    likes: {
      2: {
        uid: 134,
      }
    }
  },
};

mergeDeeplyElements(page1, page2).toJS();

function mergeDeeplyElements(page1, page2) {
    const map1 = Map(page1);
    const map2 = Map(page2);

    const deepMergeMap = map1.mergeDeep(map2);
    return deepMergeMap.valueSeq().toList();
}