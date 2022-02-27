const API_ENDPOINT = "http://localhost:3002";

async function loadBooks() {
  let url = `${API_ENDPOINT}/books`;
  const response = await fetch(url);
  const result = await response.json();

  return {
    books: result,
  };
}

export { API_ENDPOINT, loadBooks };