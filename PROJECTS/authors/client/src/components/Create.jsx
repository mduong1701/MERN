import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import authorStyle from './Main.module.css';

const Create = (props) => {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const acceptName = (event) => {
        setName(event.target.value);
        if (event.target.value.length < 3) {
            setNameError("Name must be at least 3 letters! (From React)");
        } else {
            setNameError("");
        }
    }
    // Database errors
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const createAuthor = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8000/api/authors", {
            name
        })
            .then(res => {
                console.log("SUCCESS SUCCESS");
                console.log(res.data);
                navigate("/");
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

        <div >
            <Link to="/">Home</Link>
            <h3>Add a new author:</h3>
            {
                nameError
                    ? <p style={{ color: 'red' }}>{nameError}</p>
                    : ""
            }
            
            {errors.map((err, index) => <p style={{ color: "red" }} key={index}>{err}</p>)}
            <div className={authorStyle.box}>
            
            
            <form onSubmit={createAuthor}>
                Name: <input
                    onChange={acceptName}
                    // onChange={event => setName(event.target.value)}
                    value={name}
                />



                <button className={authorStyle.button}>Submit</button>

            </form>
            <button className={authorStyle.button} onClick={() => { navigate("/") }}>Cancel</button>
            {/* <button onClick={() => { navigate("/") }}>Cancel</button> */}
        </div>
        </div>
    )
}

export default Create