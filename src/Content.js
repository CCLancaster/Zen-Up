import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Nav from './Nav'
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
      <Nav />
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