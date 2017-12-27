export default function fetchUrl() {
  return {
    type: 'FETCH_URL_FULFILLED',
    payload: {
      url: 'http://localhost:3000',
    },
  };
}
