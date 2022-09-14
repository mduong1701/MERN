import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = (props) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isImportant, setIsImportant] = useState(false);
    // Database errors
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const createNote = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8000/api/notes", {
            title,
            content,
            isImportant
        })
            .then(res => {
                console.log("SUCCESS SUCCESS");
                console.log(res.data);
                navigate("/notes");
            })
            .catch(err => {
                console.log(err.response.data)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    return (

        <div>
            <hr />
            {JSON.stringify(errors)}
            <hr />
            {errors.map((err, index) => <p style={{color: "red"}}key={index}>{err}</p>)}
            <form onSubmit={createNote}>
                Title: <input
                    onChange={event => setTitle(event.target.value)}
                    value={title}
                />
                <br />
                Content: <input
                    onChange={event => setContent(event.target.value)}
                    value={content}
                />
                <br />
                Important? <input
                    type="checkbox"
                    onChange={event => setIsImportant(event.target.checked)}
                    checked={isImportant}
                />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Create