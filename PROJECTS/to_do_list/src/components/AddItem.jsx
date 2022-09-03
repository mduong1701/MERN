import React, { useState } from 'react'

const AddItem = (props) => {
    const [ input, setInput ] = useState("")
    props.addItem(input)
    return (
        <fieldset>
            <legend>Add a new task</legend>
            <input onChange={
                (e) => {
                    setInput(e.target.value)
                }
            }/>
            <button
                style={{
                    display:'block',
                    margin: '0 auto',
                    height: '30px',
                    width: '80px',
                    backgroundColor: 'green',
                    borderRadius: '5px'
                }}>
                Add
            </button>
        </fieldset>
    )
}

export default AddItem