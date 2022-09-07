import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Form = (props) => {
    const [heroNum, setHeroNum] = useState(1)
    const nav = useNavigate()
    const submitHandler = (event) => {
        event.preventDefault()
        nav('/hero/' + heroNum)
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                type="number"
                min="1"
                onChange={(event) => {
                    setHeroNum(event.target.value)
                }}
                value={heroNum}
            />
            <button>Submit</button>
        </form>
    )
}

export default Form