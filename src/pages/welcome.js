import React from 'react';
import Image from '../assets/zen-up-circles.png'

function Wecome(props) {
    return (
        <div>
            <h1 className="welcome">Welcome <br></br>Back<br></br>Sarah</h1>
            <img className="logo" src={Image} alt="Logo" width='600px'/>
        </div>
    );
}

export default Wecome;