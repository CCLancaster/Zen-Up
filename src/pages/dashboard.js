import React from 'react';
import { Link } from 'react-router-dom';
import SettingsIcon from '@material-ui/icons/Settings';
import EditIcon from '@material-ui/icons/Edit';

function Dashboard(props) {

    return (
        <div className="dashboard">
            <div className="user">
                <div className="photo">
                    <img src="../assets/Sarah-King.png" alt="sarah king" />
                </div>
                <div className="user-info">
                    <h1>Sarah King</h1>
                    < br />
                    <SettingsIcon />  <EditIcon />
                </div>
            </div>
            <div className="main">
                <div className="levels">
                    <div className="level seven">LEVEL 7</div>
                    <div className="level six">LEVEL 6</div>
                    <div className="level five">LEVEL 5</div>
                    <div className="level four">LEVEL 4</div>
                    <div className="level three">LEVEL 3</div>
                    <div className="level two">LEVEL 2</div>
                    <div className="level one">LEVEL 1</div>
                </div>
                <div className="dashtiles">
                    <div className="row">
                        <div className="tile ul"><Link to="/journal">Journal Entries</Link></div>
                        <div className="tile ur"><Link to="/goals">Today's Goals</Link></div>
                    </div>
                    <div className="row">
                        <div className="tile ll"><Link to="/categories">Categories</Link></div>
                        <div className="tile lr"><Link to="/achievements">Achievements</Link></div>
                    </div>
                </div>
            </div>
            <div className="stats">
                <div>
                    <h3>Level 3</h3>
                </div>
                <div>
                    <p>you have 6 tasks to complete to level up</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;