import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const People = (props) => {
    // Use useParams() to get id value from URL 
    const { id } = useParams()
    const toErrorPage = useNavigate()
    // Use useState to save and set values of name, height, mass, hairColor, skinColor
    const [name, setName] = useState("")
    const [height, setHeight] = useState("")
    const [mass, setMass] = useState("")
    const [hairColor, setHair] = useState("")
    const [skinColor, setSkin] = useState("")
    // After the component is rendered, the function inside useEffect is executed
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}/`)
            .then(res => {
                setName(res.data.name)
                setHeight(res.data.height)
                setMass(res.data.mass)
                setHair(res.data.skin_color)
                setSkin(res.data.eye_color)
            })
            .catch(() => {
                toErrorPage('/error', {replace: true})
            })
    }, [id])

    return (
        <>
            <h2>{name}</h2>
            <p><strong>Height:</strong> {height} cm</p>
            <p><strong>Mass:</strong> {mass} kg</p>
            <p><strong>Hair Color:</strong> {hairColor}</p>
            <p><strong>Skin Color:</strong> {skinColor}</p>
        </>
    )
}

export default People