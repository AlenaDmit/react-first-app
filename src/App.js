import React from 'react';

import Main from './components/Main/Main';
import HeaderContainer from './containers/HeaderContainer';

import './App.css';


function App() {
    return (
        <div className="App">
            <HeaderContainer/>
            <Main/>
        </div>
    );
}

export default App;