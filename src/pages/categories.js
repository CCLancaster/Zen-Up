import React from 'react';
import Image from '../assets/zen-up-circles.png'

function Categories(props) {
    return (

        <div>
            <img className="logo" src={Image} alt="Logo" width='600px'/>
     
      
        <div className="buttons">
            <div className="violet">Understanding</div>
            <div className="indigo">Intuition</div>
            <div className="blue">Communication</div>
            <div className="green">Compassion</div>
            <div className="yellow">Energy</div>
            <div className="orange">Balance</div>
            <div className="red">Stability</div>
      
        </div>
    );
}

export default Categories;