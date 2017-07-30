import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import promise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleWare = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
  , document.querySelector('#app-container')
);
