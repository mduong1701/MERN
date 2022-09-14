import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = (props) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isImportant, setIsImportant] = useState(false);

    const navigate = useNavigate();

    const createNote = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8000/api/notes", {
            title,
            content,
            isImportant
        })
            .then(res => {
                console.log(res.data);
                navigate("/notes");
            })
            .catch(err => console.log(err))
    }

    return (
        <div onSubmit={createNote}>
            <form>
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