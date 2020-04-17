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
            <header>
                <h1>Achievements</h1>
                <h3>Stickers Earned</h3>
            </header>
            <body className="stickers">
                <img id='img' src={aliveImg} alt='alive'></img>
                <img id='img' src={bichonImg} alt='bichon'></img>
                <img id='img' src={cabinImg} alt='cabin'></img>
                <img id='img' src={hunterImg} alt='hunter'></img>
                <img id='img' src={joyImg} alt='joy'></img>
                <img id='img' src={lostImg} alt='lost'></img>
            </body>
        </div>
    )
}
export default Achievement;