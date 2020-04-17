import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Nav';
import Content from './Content';

function App() {
 

  return (
    <Router>
      <div className="app">
        <Nav />
        <main>
          <Content />
        </main>
      </div>
    </Router>  
  )
}
export default App;