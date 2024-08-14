//const { fromJS } = require('immutable');
import { fromJS } from './node_modules/immutable/dist/immutable';

/* Converts a JavaScript object into an Immutable.js Map*/

function getImmutableObject(object) {
    return fromJS(object);
};

export default getImmutableObject;
