import React from 'react';
import { Segment } from 'semantic-ui-react';

import Main from './components/Main/Main';
import HeaderContainer from './containers/HeaderContainer';

import './App.css';


function App() {
    return (
        <Segment.Group className="App">
            <HeaderContainer/>
            <Main/>
        </Segment.Group>
    );
}

export default App;