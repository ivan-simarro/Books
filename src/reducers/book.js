const initialBooksState = {
  loading: false,
  books: [],
};

const bookReducer = (state, action) => {
  switch (action.type) {
    case "BOOK_FETCH_INIT":
      return {
        ...state,
        loading: true,
      };
    case "BOOK_FETCH_SUCCESS":
      return {
        loading: false,
        books: action.payload.books,
      };
    default:
      throw Error("Action Books Error!");
  }
};

export { initialBooksState, bookReducer };
