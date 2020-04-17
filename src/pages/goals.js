import React, { useState } from 'react';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';


function Goals(props) {

    return (
      
        <div className="buttons">
            <div className="violet">
                Journal Entry
            </div>
            <div className="indigo">
                Meditation
                <br/>
                <input type="checkbox" id="meditation" name="meditaion" /> <button id="plus">+</button>
                <h5>I meditated for 5+ minutes today</h5>
            </div>
                
            <div className="blue">
                Reach Out to a Human
                <br/>
                <input type="checkbox" id="meditation" name="meditaion" />
                <button id="plus">+</button>
                <h5>I reached out to a human today</h5>
            </div>
            <div className="green">
                Do Something Kind for Someone
            </div>
            <div className="yellow">
                Sleep
                <br/>
                <input type="checkbox" id="meditation" name="meditaion" />
                <button id="plus">+</button>
                <h5>I slept for 7+ hours last night</h5>
            </div>
            <div className="orange">
                Movement
                <br/>
                <input type="checkbox" id="meditation" name="meditaion" />
                <button id="plus">+</button>
                <h5>I did 15+ min of extra movement today</h5>
            </div>
            <div className="red">
                Budget
            </div>
        </div>
    )
}

export default Goals;