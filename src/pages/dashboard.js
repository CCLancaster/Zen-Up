import React from 'react';
import { Link } from 'react-router-dom';
import SettingsIcon from '@material-ui/icons/Settings';
import EditIcon from '@material-ui/icons/Edit';

function Dashboard(props) {
    return (
        <div className="dashboard">
            <div className="user">
                <div>
                    <img src="#" />
                </div>
                <div>
                    <h1>This is the Dashboard</h1>
                    <p>{SettingsIcon}  {EditIcon}</p>
                </div>
            </div>
            <div className="main">
                <div className="levels">
                    This is where the levels go.
                </div>
                <div className="dashtiles">
                    <div className="tile"><Link to="/journal">Journal Entries</Link></div>
                    <div className="tile"><Link to="/goals">Today's Goals</Link></div>
                    <div className="tile"><Link to="/categories">Categories</Link></div>
                    <div className="tile"><Link to="/achievements">Achievements</Link></div>
                </div>
            </div>
            <div className="stats">
                <h3>Level 3</h3>
                <p>you have 6 tasks to complete to level up</p>
            </div>
        </div>
    );
}

export default Dashboard;