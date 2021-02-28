import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import WeatherApp  from "./components/WeatherApp";

import store from './store/store';

const applicationStore = store();

const jsx = (
  <Provider store={applicationStore}>
    <WeatherApp/>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

module.hot.accept();