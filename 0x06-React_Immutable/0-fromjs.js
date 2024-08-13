const { fromJS } = require('immutable');

// Converts a JavaScript object into an Immutable.js Map

function getImmutableObject(object) {
    return fromJS(object);
};

export default getImmutableObject;
