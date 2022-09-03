import React, { useState } from 'react'

const AddItem = (props) => {
    const [input, setInput] = useState("")
    
    const submitHandler = (event) => {
        event.preventDefault();
        props.addItem(input);
        event.target.reset();
    }
    return (
        <fieldset>
            <legend>Add a new task</legend>
            <form onSubmit = {submitHandler}>
                <input onChange={
                    (e) => {
                        setInput(e.target.value)
                    }
                } />
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