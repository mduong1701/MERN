import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import authorStyle from './Main.module.css';

const Update = (props) => {
    // Grab the id from useParams
    const { id } = useParams();
    console.log("Found this id");
    const [name, setName] = useState("");

    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const [nameError, setNameError] = useState("");
    const acceptName = (event) => {
        setName(event.target.value);
        if (event.target.value.length < 3) {
            setNameError("Name must be at least 3 letters! (From React)");
        } else {
            setNameError("");
        }
    }
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setName(res.data.name);
            })
            .catch(err => {
                console.log(err);
            })
    }, [id])

    const updateAuthor = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, {
            name
        })
            .then(res => navigate("/"))
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
            <Link to="/">Home</Link>
            <h3>Edit this author:</h3>
            {
                    nameError
                        ? <p style={{ color: 'red' }}>{nameError}</p>
                        : ""
                }

                {errors.map((err, index) => <p style={{ color: "red" }} key={index}>{err}</p>)}
            <div className={authorStyle.box}>

                <form onSubmit={updateAuthor}>
                    Name: <input
                        onChange={acceptName}
                        value={name}
                    />
                    <button className={authorStyle.button}>Submit</button>
                </form>
                <button className={authorStyle.button} onClick={() => { navigate("/") }}>Cancel</button>
            </div>
        </div>
    )
}

export default Update