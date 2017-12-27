
export default function reducer(state = {
  fetching: false,
  fetched: false,
  baseUrl: '',
  err: null,
}, action) {
  switch (action.type) {
    case 'FETCH_URL': {
      return { ...state, fetching: true };
    }
    case 'FETCH_URL_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        baseUrl: action.payload,
      };
    }
    case 'FETCH_URL_REJECTED': {
      return { ...state, fetching: false, error: action.payload };
    }
    default: {
      // Should do the same as loading
      break;
    }
  }
  return state;
}
