const { List, Map } = require('immutable');

//Concatenates two arrays into an Immutable.js List.
function concatElements(page1, page2) {
    return List(page1).concat(List(page2));
}

//Merges two objects into an Immutable.js List.
function mergeElements(page1, page2) {
    const map1 = Map(page1);
    const map2 = Map(page2);
    
    const margeMap = map1.mergeWith((value1, value2) => value2, map2);
    return margeMap.valueSeq().toList();
}
