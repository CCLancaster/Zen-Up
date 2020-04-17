import React from 'react';
import { Route } from 'react-router-dom';

// import Home from './pages/Home';
// import Login from './pages/Login';
// import Profile from './pages/Profile';
// import Signup from './pages/Signup';


const Content = props => {
  return (
    <div className="container">
      <Route exact path="/" render={
        () => <Home />
      } />
      <Route path="/auth/login" render={
        () => <Login  />
      } />
      <Route path="/welcome" render={
        () => <Welcome />
      } />
      <Route path="/dashboard" render={
        () => <Dashboard />
      } />
      <Route path="/categories" render={
        () => <Categories />
      } />
      <Route path="/achievements" render={
        () => <Achievements />
      } />
      <Route path="/goals" render={
        () => <Goals />
      } />
   </div>
  )
}

export default Content;