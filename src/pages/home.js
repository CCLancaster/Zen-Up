import React from 'react';
import Image from '../image/zen-up-circles.png'

function Home(props) {
    return (
        <div>
            <h1 className="zu">Z <br></br>U</h1>
            <img className="logo" src={Image} alt="Logo" />
        </div>
    );
}

export default Home;