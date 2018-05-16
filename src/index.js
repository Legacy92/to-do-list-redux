import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer from './reducers';
// import promise from 'redux-promise';
import customPromise from './middleware/promise';

const store = createStore(rootReducer, {}, applyMiddleware(customPromise));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
