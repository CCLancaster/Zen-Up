import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './pages/home';
import Welcome from './pages/welcome';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Profile from './pages/profile';
import Signup from './pages/signup';


const Content = props => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <a><Link className="nav-logo" to="/welcome">Zen Up</Link></a>
          </ul>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li> 
            <li><Link to="/profile">Profile</Link></li> 
            <li><Link to="/login">Login</Link></li> 
            <li><Link to="/signup">signup</Link></li> 
          </ul >
          </nav>
      </div>
      <Route exact path="/" component={Home} />
      <Route path="/welcome" component={Welcome}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/profile" component={Profile} />
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup} />
      
    </Router>
  )
}

export default Content;