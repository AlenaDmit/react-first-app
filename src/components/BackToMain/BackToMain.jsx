import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import './BackToMain.css';

function BackToMain() {
    return(
        <div className="back-to-main">
            <Link to="/"><Button >Back</Button></Link>
        </div>
    )
}

export default BackToMain;