import { List, Map } from 'immutable';

// Concatenates two arrays into an Immutable.js List.
export function concatElements(page1, page2) {
  return List(page1).concat(List(page2));
}

// Merges two objects into an Immutable.js List.
export function mergeElements(page1, page2) {
  return Map(page1).concat(Map(page2));
}
