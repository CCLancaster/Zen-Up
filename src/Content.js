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
      <Route path="/Login" render={
        () => <Login  />
      } />
      <Route path="/auth/signup" render={
        () => <Signup />
      } />
      <Route path="/profile" render={
        () => <Profile />
      } />
   </div>
  )
}

export default Content;