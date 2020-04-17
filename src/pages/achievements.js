import React from 'react';
import aliveImg from '../assets/alive.jpg';
import bichonImg from '../assets/bichon.gif';
import cabinImg from '../assets/cabin.png';
import hunterImg from '../assets/hunter.png';
import joyImg from '../assets/joy.png';
import lostImg from '../assets/lost.png';


function Achievement(){

    return(
        <div>
            <div className="header">
                <div className="title">
                    <h1>Achievements</h1>
                </div>
                <div className="earned">
                    <h3>Stickers Earned</h3>
                </div>
            </div>
            <div className="stickers">
                <div className="rows">
                    <div className="image"><img src={aliveImg} alt='alive' /></div>
                    <div className="image"><img src={bichonImg} alt='bichon' /></div>
                    <div className="image"><img src={hunterImg} alt='hunter' /></div>
                    
                </div>
                < br/>
                <div className="rows">
                    <div className="image"><img className='img' src={cabinImg} alt='cabin' /></div>
                    <div className="image"><img className='img' src={joyImg} alt='joy' /></div>
                    <div className="image"><img className='img' src={lostImg} alt='lost' /></div>
                </div>
            </div>
        </div>
    )
}
export default Achievement;