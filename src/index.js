import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './Store'
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import Store from "./Store";
import registerServiceWorker from './registerServiceWorker';

const store = Store();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
