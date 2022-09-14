import React, {useState, useEffect } from 'react';
import axios from 'axios';

const Main = (props) => {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/notes")
            .then(res => {
                console.log(res.data);
                setNotes(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h2>All the notes!</h2>
            {/* {JSON.stringify(notes)} */}

            {
                notes.map((note, index) => {
                    return <div key={note._id}>
                        {note.title}
                    </div>
                })
            }
        </div>
    )
}

export default Main