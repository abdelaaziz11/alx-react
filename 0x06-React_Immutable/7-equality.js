const { is, Map } = require('immutable');

export const areMapsEqual = (map1, map2) => is(Map(map1), Map(map2));
