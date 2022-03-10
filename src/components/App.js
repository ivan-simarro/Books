import Nav from "./Nav";
import "./App.scss";
import { bookReducer, initialBooksState } from "../reducers/book";
import { loadBooks } from "../api/books";
import { useEffect, useReducer, useState } from "react";
import DependingPage from "./DependingPage";

export default function App() {
  const [page, setPage] = useState("Discover");
  const [selected, setSelected] = useState(3);
  const [discovering, setDiscovering] = useState([]);

  const [booksState, dispatchBooksState] = useReducer(
    bookReducer,
    initialBooksState
  );

  useEffect(() => {
    dispatchBooksState({ type: "BOOK_FETCH_INIT" });
    loadBooks().then((res) =>
      dispatchBooksState({
        type: "BOOK_FETCH_SUCCESS",
        payload: res,
      })
    );
    // 1 == 1 && console.log("<<<<<<<<<"); comprobar que solo se cargan una vez
  }, []);

  useEffect(() => {
    booksState.books !== [] && setDiscovering(booksState.books);
  }, [booksState.books]);

  // console.log("booksState"); comprobar la carga de datos
  function handleClick(e) {
    e.nativeEvent.preventDefault();
    setSelected(3);
    setPage("Discover");
  }

  return (
    <div className="app">
      <Nav setPage={setPage} setSelected={setSelected} selected={selected} />
      <div className="body">
        <DependingPage page={page} discovering={discovering} loading={booksState.loading} handleClick={handleClick} selected={selected} setDiscovering={setDiscovering} />
      </div>
    </div>
  );
}
