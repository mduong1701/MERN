import React, { useState, useEffect } from 'react';
import axios from 'axios';
import productStyle from './Main.module.css';
import { Link, useNavigate } from 'react-router-dom';

const Main = (props) => {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    // Go to update route
    const goToUpdate = (updateID) => {
        navigate("/update/" + updateID);
    }

    // Go to update route
    const deleteProduct = (deleteID) => {
        axios.delete(`http://localhost:8000/api/products/${deleteID}`)
            .then(res => {
                console.log(res.data);
                console.log("Delete successfully");
                // remove the note from the DOM after a successful deletion
                setProducts(products.filter((product) => product._id != deleteID));
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>All the products:</h2>
            {/* {JSON.stringify(notes)} */}

            {
                products.map((oneProduct, index) => {
                    return (
                        <div key={oneProduct._id} className={productStyle.product}>
                            <Link to={`/product/${oneProduct._id}`}>
                                <h5>{oneProduct.title}</h5>
                                <p>Price: ${oneProduct.price}</p>
                                <p>Description: {oneProduct.description}</p>
                            </Link>
                            <button onClick={() => goToUpdate(oneProduct._id)}>Edit</button>
                            <button onClick={() => deleteProduct(oneProduct._id)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Main