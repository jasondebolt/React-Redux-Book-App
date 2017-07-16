// This is a reducer.
// All reducers get two arguments.
// Reducers are only ever called when an action occurs.
// State argument is not application state, only state
// this reducer is responsible for.
// The same state keeps flowing into the reducer, similar
// to how JavaSript's reduce function works. There is the notion
// of previous state. Also, never mutate the state in a reducer, always
// return a fresh object.
// If we boot the app up and the user hasn't clicked on anything yet,
// this reducer is going to be returning 'state'. But that would mean that,
// without specifying 'state = null' as the default arg, the returned state
// would be undefined. And if we returned undefined from a reducer, it will
// throw an error. So we must always return a non undefined value.
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  // base case.
  return state
}
