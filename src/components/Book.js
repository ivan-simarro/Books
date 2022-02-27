import { API_ENDPOINT } from "../api/books";
import "./Book.scss";

function PlusIcon() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z"></path>
    </svg>
  );
}

function ReadIcon() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path>
    </svg>
  );
}

function Book({ discovering, reading, finished, setDiscovering, setReading, setFinished, listBooks, selected, b }) {
  const { title, author, coverImageUrl, id, pageCount, publisher, synopsis } = b;

  return (
    <div className="book">
      <div className="book__img">
        <img
          src={`${API_ENDPOINT}/${coverImageUrl}`}
          alt="book"
          className="book__img"
        />
      </div>
      <div className="book__content">
        <div className="book__header">
          <div className="book__title">
            <h2>{title}</h2>
          </div>
          <div>
            <div className="book__author">{author}</div>
            <small className="book__publisher">{publisher}</small>
          </div>
        </div>
        <small className="book__synopsis">{synopsis}</small>
      </div>
      <div className="book__control-container">
        {selected === 3 ? (
          <div onClick={(e) => listBooks(e, b, discovering, reading, setReading, setDiscovering)} >
            <PlusIcon />
          </div>
        ) : selected === 1 ? (
          <>
            <div onClick={(e) => listBooks(e, b, reading, finished, setFinished, setReading)} >
              <CheckIcon />
            </div>
            <div onClick={(e) => listBooks(e, b, reading, discovering, setDiscovering, setReading)} >
              <MinusIcon />
            </div>
          </>
        ) : (
          <>
            <div onClick={(e) => listBooks(e, b, finished, discovering, setDiscovering, setFinished)} >
              <ReadIcon />
            </div>
            <div onClick={(e) => listBooks(e, b, finished, reading, setReading, setFinished)} >
              <MinusIcon />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Book;
