import React, { useState } from 'react'

const FormBox = (props) => {

    // State variable for the input
    const [input, setInput] = useState("")
    // Submitting the form
    const submitHandler = (event) => {
        event.preventDefault();
        props.addBox(input);
        console.log(input);
        event.target.reset();
    }
    return (
        <fieldset>
            <legend>Make a new box!</legend>
            <form onSubmit={submitHandler}>
                Color: 
                <input onChange={
                    (e) => {
                        setInput(e.target.value)
                    }
                }/>
                <button>Submit</button>
            </form>
        </fieldset>
    )
}

export default FormBox