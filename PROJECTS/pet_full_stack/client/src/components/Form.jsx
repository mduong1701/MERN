import React, { useState } from 'react'
import axios from 'axios'

const Form = ({ isReady, setIsReady }) => {

    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [eyeColor, setEyeColor] = useState("fafafa")

    const createPet = (e) => {
        e.preventDefault();
        const newPet = {
            name,
            age,
            eyeColor
        }
        axios.post("http://localhost:8000/api/pets", newPet)
            .then(res => {
                console.log(res.data)
                setIsReady(!isReady);
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={createPet}>
                name: <input onChange={(e => setName(e.target.value))} value={name} /> <br />
                age: <input onChange={(e => setAge(e.target.value))} type="number" value={age} /> <br />
                eyeColor <input onChange={(e => setEyeColor(e.target.value))} type="color" value={eyeColor} /> <br />
                <button>submit</button>
            </form>
        </div>
    )
}

export default Form