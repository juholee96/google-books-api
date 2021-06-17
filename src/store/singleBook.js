//action types
const ADD_BOOK = "ADD_BOOK";

//action creator
export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

//thunk
export const fetchBook = (book) => {
  return async (dispatch) => {
    try {
    } catch (error) {
      console.error(error);
    }
  };
};

const intialState = [];

const singleBookReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return action.book;
    default:
      return state;
  }
};

export default singleBookReducer;
