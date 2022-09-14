import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const createProduct = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8000/api/products", {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res.data);
                navigate("/products");
            })
            .catch(err => console.log(err))
    }

    return (
        <div onSubmit={createProduct}>
            <form>
                Title: <input
                    onChange={event => setTitle(event.target.value)}
                    value={title}
                />
                <br />
                Price: <input
                    type="number"
                    onChange={event => setPrice(event.target.value)}
                    value={price}
                />
                <br />
                Description <input
                    onChange={event => setDescription(event.target.value)}
                    value={description}
                />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Create