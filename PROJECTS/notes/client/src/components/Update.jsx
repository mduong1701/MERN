import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Update = (props) => {
    // Grab the id from useParams
    const { id } = useParams();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isImportant, setIsImportant] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/notes/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setContent(res.data.content);
                setIsImportant(res.data.isImportant);
            })
            .catch(err => console.log(err))
    }, [])

    const updateNote = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8000/api/notes/${id}`, {
            title,
            content,
            isImportant
        })
            .then(res => navigate("/notes"))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={updateNote}>
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

export default Update