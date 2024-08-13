const { Map } = require('immutable');

// Converts a JavaScript object into an Immutable.js Map

function getImmutableObject(object) {
    return Map(object);
};

export default getImmutableObject;
