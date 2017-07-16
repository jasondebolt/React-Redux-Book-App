// This is an action creator.
// We have to make sure that this is wired up to Redux.
// You cannot just call this as a click handler.
// Whenever an action is dispatched, it flows through ALL of the reducers
// witin our application. Each reducer has the option of returning a different
// piece of state depending on the type of action that was recieved.
export function selectBook(book) {
  // selectBook is an Action Creator, it needs to return an action,
  // an object with a type property.
  console.log('A book has been selected:', book.title)
  // An action contains a type, and sometimes a payload. The type is always
  // uppercase, usually a string but could also be a variable.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
