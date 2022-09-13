import React, { useState } from 'react'
import axios from 'axios'

const Form = ({ isReady, setIsReady }) => {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    const createProduct = (e) => {
        e.preventDefault();
        const newProduct = {
            title,
            price,
            description
        }
        axios.post("http://localhost:8000/api/products", newProduct)
            .then(res => {
                console.log(res.data)
                setIsReady(!isReady);
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={createProduct}>
                Title: <input onChange={(e => setTitle(e.target.value))} value={title} /> <br />
                Price: <input onChange={(e => setPrice(e.target.value))} type="number" value={price} /> <br />
                Description: <input onChange={(e => setDescription(e.target.value))} value={description} /> <br />
                <button>Create</button>
            </form>
        </div>
    )
}

export default Form