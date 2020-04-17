import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import Home from './pages/home';
import Welcome from './pages/welcome';
import Dashboard from './pages/dashboard';
import Categories from './pages/categories';
import Achievements from './pages/achievements';
import Goals from './pages/goals';
import Login from './pages/login';
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
            <li><Link to="/achievements">Achievements</Link></li> 
            <li><Link to="/categories">Categories</Link></li> 
            <li><Link to="/dashboard">Dashboard</Link></li> 
            <li><Link to="/login">Login</Link></li> 
            <li><Link to="/signup">signup</Link></li> 
          </ul >
          </nav>
      </div>
      <div className="container">
        <Route exact path="/" render={
          () => <Home />
        } />
        <Route path="/welcome" render={
          () => <Welcome />
        } />
        <Route path="/dashboard" render={
          () => <Dashboard journal={props.journal} level={props.level} updateLevel={props.updateLevel} />
        } />
        <Route path="/categories" render={
          () => <Categories />
        } />
        <Route path="/achievements" render={
          () => <Achievements />
        } />
        <Route path="/goals" render={
          () => <Goals level={props.level} updateLevel={props.updateLevel} />
        } />
        <Route path="/login" render={
          () => <Login  />
        } />
        <Route path="/signup" render={
          () => <Signup />
        } />
      </div>
    </Router>

  )
}

export default Content;