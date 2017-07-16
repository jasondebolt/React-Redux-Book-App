import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';


// Any key in the object that we provide to 'combineReducers' ends up
// as a key on our global state.
// Application state is formed by all of the reducers.
// All of these reducers get tied together with this 'combineReducers' function.
// For each key in our combineReducers object, we assign one reducer.
// Whatever BooksReducer returns is what will be available as application state
// for the 'books' key.
// Each reducer (BooksReducer, ActiveBook) is responsible for thier own piece
// of state.

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
