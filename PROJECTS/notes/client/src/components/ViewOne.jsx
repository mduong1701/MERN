import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const thisComponentStyle = {
    width: "60%",
    margin: "0 auto",
    textAlign: "left",
    backgroundColor: "gray",
    padding: "10px 20px",
    borderRadius: "10px"
}

const ViewOne = (props) => {

    // Grab the variable from the url :id
    const { id } = useParams();
    const [thisNote, setThisNote] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/notes/${id}`)
            .then(res => {
                console.log(res.data);
                setThisNote(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {
                thisNote
                    ? <div style={thisComponentStyle}>
                        <p>{thisNote.isImportant && "🔥🔥"}</p>
                        <p> Title: {thisNote.title}</p>
                        <p>Content: {thisNote.content}</p>
                    </div>
                    : "Loading ..."
            }
        </div>
    )
}

export default ViewOne