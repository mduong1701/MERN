import React, { useState } from 'react'

const AddItem = (props) => {
// Utilize useState function to have a variable input and a function to set a value into input
    const [input, setInput] = useState("")
// A function to accept a user input    
    const submitHandler = (event) => {
        event.preventDefault();
        props.addItem(input);
        // event.target.reset();
        setInput("")
    }
    return (
        <fieldset>
            <legend>Add a new task</legend>
{/* Call submitHandler function when the user input is submitted */}
            <form onSubmit = {submitHandler}>
                <input 
                    value = {input}
                    onChange={ (e) => {
//  Save the user input into the variable input
                        setInput(e.target.value)
                    }
                } />
{/* CSS style of the submit button */}
                <button
                    style={{
                        display: 'block',
                        margin: '0 auto',
                        height: '30px',
                        width: '80px',
                        backgroundColor: 'green',
                        borderRadius: '5px'
                    }}>
                    Add
                </button>
            </form>
        </fieldset>
    )
}

export default AddItem