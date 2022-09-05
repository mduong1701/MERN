import React, { useState } from 'react'

const FormBox = (props) => {

    // State variable for the input
    const [color, setColor] = useState("");
    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");
    // Submitting the form
    const submitHandler = (event) => {
        event.preventDefault();
        const input = {
            color,
            height,
            width
        }
        props.addBox(input);
        setColor("");
        setHeight("");
        setWidth("");
    }
    return (
        <fieldset>
            <legend>
                Make a new box!
            </legend>
            <form onSubmit={submitHandler}>
                Color:
                <input
                    type="text"
                    value={color}
                    onChange={(event) => { setColor(event.target.value) }}
                    placeholder="green"
                />
                Height:
                <input
                    type="text"
                    value={height}
                    onChange={(event) => { setHeight(event.target.value) }}
                    placeholder="50px"
                />
                width:
                <input
                    type="text"
                    value={width}
                    onChange={(event) => { setWidth(event.target.value) }}
                    placeholder="50px"
                />
                <button>
                    Submit
                </button>
            </form>
        </fieldset>
    )
}

export default FormBox