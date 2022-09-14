import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const thisComponentStyle = {
    width: "60%",
    margin: "0 auto",
    textAlign: "left",
    backgroundColor: "green",
    padding: "10px 20px",
    borderRadius: "10px"
}

const ViewOne = (props) => {

    // Grab the variable from the url :id
    const { id } = useParams();
    const [thisProduct, setThisProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data);
                setThisProduct(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {
                thisProduct
                    ? <div style={thisComponentStyle}>
                        <p>Title: {thisProduct.title}</p>
                        <p>Price: ${thisProduct.price}</p>
                        <p>Description: {thisProduct.description}</p>
                    </div>
                    : "Loading ..."
            }
        </div>
    )
}

export default ViewOne