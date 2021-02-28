import { createStore, combineReducers } from 'redux';

import citiesReducer from '../reducers/cities';
import weatherReducer from '../reducers/weather';

export default () => {
  const store = createStore(
    combineReducers({
      cities: citiesReducer,
      weather: weatherReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
