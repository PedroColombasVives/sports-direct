import { Link } from 'react-router-dom';
import React from 'react';

function WelcomePage() {
    return (
        <div>
            <h2>This is the welcome page!</h2>
            <Link to="/sport">Sports</Link>
        </div>
    )
}

export default WelcomePage;