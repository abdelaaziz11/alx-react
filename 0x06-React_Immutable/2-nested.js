const { getIn, fromJS } = require('immutable');

export default function accessImmutableObject(object, array) {
  return getIn(fromJS(object), array);
}
