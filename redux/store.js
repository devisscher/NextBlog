import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducers';

const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(reducer, middleware);

// store.dispatch((dispatch) => {
//   dispatch({ type: 'FOO' });
//   axios.get('https://swapi.co/api/planets').then((response) => {
//     dispatch({ type: 'FETCH_USERS', payload: response.data });
//   }).catch((err) => {
//     dispatch({ type: 'FETCH_USERS_ERROR', payload: err });
//   });
// });
