import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
// import Nav from './Nav';
import Content from './Content';

function App() {
  let [journalEntries, setJournalEntries] = useState(
    [{
      "title" : "My First Entry",
      "date" : "Monday, April 13",
      "content" : "My dudes...this is my first entry!"
  },
  {
      "title" : "Long Day",
      "date" : "Tuesday, April 14",
      "content" : "My partner in crime spoke to my class today and algorithms are rough. I need to create my portfolio site!"
  },
  {
      "title" : "Semi-Official Graduation Day",
      "date" : "Wednesday, April 15",
      "content" : "I can't believe SEI29 cohort is almost done, I'm going to miss them so much!"
  }]
  )

  let [level, setLevel] = useState('1')
  
  const updateLevel = newLevel => {
    setLevel(newLevel)
  }

  return (
    <Router>
      <div className="app">
        {/* <Nav /> */}
        <main>
          <Content journal={journalEntries} level={level} updateLevel={updateLevel}/>
        </main>
      </div>
    </Router>  
  )
}

export default App;