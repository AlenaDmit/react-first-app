import React from 'react';
import BackToMain from '../../components/BackToMain/BackToMain';

import './NotFound.css';


function NotFound() {
    return (
        <div>
            <h2 className="not-found">Oops, there isn't current page</h2>
            <BackToMain/>
        </div>
    )
}

export default NotFound;