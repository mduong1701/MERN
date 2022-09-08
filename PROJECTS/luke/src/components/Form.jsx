import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = (props) => {
// Use useState to save and set value of choice
    const [choice, setChoice] = useState("")
// Use useState to save and set value of id
    const [id, setId] = useState(0)
// Declare a variable of useNavigate()
    const nav = useNavigate()
// Function to decide which route to go
    const submitHandler = (event) => {
        event.preventDefault()
        if (choice === "people"){
            nav('/people/' + id)
        } else if (choice === "planets"){
            nav('/planets/' + id)
        }
    }
//=========================================================
    return (
        <form onSubmit={submitHandler}>
            <label>Search for</label>
            {/* selection input with 2 options: people, planet */}
            <select
                value = {choice}
                onChange={ (event) => {
                    setChoice(event.target.value)}
                    }>
                <option value="people">people</option>
                <option value="planets">planets</option>
            </select>
            {/* id input */}
            <label>ID: </label>
            <input
                onChange={(event) => {setId(event.target.value)}}
                value = {id}
                type="number"
            />
            <button>Search</button>
        </form>
    )
}

export default Form