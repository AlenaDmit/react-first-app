import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers'
import state from './state';
import App from './App';

import './App.css';


import { HashRouter, Route } from 'react-router-dom';
const store = createStore(reducer, state);

const render = Component => {
    ReactDOM.render(
        <HashRouter>
        <AppContainer>

                <Provider store={store}>
                    <Component/>
                </Provider>
        </AppContainer>
        </HashRouter>,
        document.getElementById('root')
    );
};
render(App);


// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./App', () => { render(App) })
}
