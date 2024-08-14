import { List } from 'immutable';

// Converts an array into an Immutable.js List.
export function getListObject (array) {
  return List(array);
}

// Appends an element to an Immutable.js List and returns the updated List.
export function addElementToList (list, element) {
  return list.push(element);
}
