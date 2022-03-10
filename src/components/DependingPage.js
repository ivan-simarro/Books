import { useState } from "react";
import Book from "./Book";
import Loading from "./Loading";

// REFACTORIZACION DE APP

export default function DependingPage({ page, discovering, loading, handleClick, selected, setDiscovering }) {

  const [reading, setReading] = useState([]);
  const [finished, setFinished] = useState([]);

  function listBooks(e, singleBook, arr, last, addingFnct, updatingFnct) {
    const newData = arr.filter((b) => b.id !== singleBook.id);
    addingFnct([...last, singleBook]);
    updatingFnct(newData);
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ul style={{ marginLeft: "1.5rem" }}>
          <>
            {page !== "Discover" && (page === "Reading" ? reading : finished).length === 0 && (
              <p>
                Hey there! This is where books will go when you've finished
                reading them. Get started by heading over to{" "}
                <a href="/" onClick={handleClick}>
                  the Discover page
                </a>{" "}
                to add books to your list.
              </p>
            )}
            {(page !== "Discover" ? page === "Reading" ? reading : finished : discovering).map((b) => {
              return (
                <li key={b.id}>
                  <Book discovering={discovering} reading={reading} finished={finished} setDiscovering={setDiscovering} setReading={setReading} setFinished={setFinished} listBooks={listBooks} selected={selected} b={b} />
                </li>
              );
            })}
          </>
        </ul>
      )}
    </>
  );
}
