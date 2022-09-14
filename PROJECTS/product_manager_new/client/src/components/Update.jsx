import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Update = (props) => {
    // Grab the id from useParams
    const { id } = useParams();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [])

    const updateProduct = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description
        })
            .then(res => navigate("/products"))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={updateProduct}>
                Title: <input
                    onChange={event => setTitle(event.target.value)}
                    value={title}
                />
                <br />
                Price: $<input
                    type="number"
                    onChange={event => setPrice(event.target.value)}
                    value={price}
                />
                <br />
                Description: <input
                    onChange={event => setDescription(event.target.value)}
                    value={description}
                />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Update