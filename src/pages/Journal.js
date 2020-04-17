import React from 'react'
import { Link } from 'react-router-dom'



function Journal(props) {



    let journalEntries = props.journal.length < 1 ? 
        <h3>You don't have any journal entries yet!</h3> :
        props.journal.map((entry, i) => {
            <div className="entries" key={`journalEntries-${i}`}>
                <div>
                    <h1>{entry.title}</h1>
                    <h5>{entry.date}</h5>
                </div>
                <div>
                    <p>{entry.content}</p>
                </div>
            </div>
        })

    return(
        <div className="journals">
            {journalEntries}
        </div>
    )

}

export default Journal;