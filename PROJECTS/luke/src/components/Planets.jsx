import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Planets = (props) => {
    // Use useParams() to get id value from URL 
    const { id } = useParams()
    // Use useState to save and set values of name, climate, terrain, water, population
    const [name, setName] = useState("")
    const [climate, setClimate] = useState("")
    const [terrain, setTerrain] = useState("")
    const [water, setWater] = useState("")
    const [population, setPopulation] = useState(0)

    const toErrorPage = useNavigate()
    // After the component is rendered, the function inside useEffect is executed
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}/`)
            .then(res => {
                setName(res.data.name)
                setClimate(res.data.climate)
                setTerrain(res.data.terrain)
                setWater(res.data.surface_water)
                setPopulation(res.data.population)
            })
            .catch(() => {
                toErrorPage('/error', {replace: true})
            })
    }, [id])

    return (
        <>
            <h2>{name}</h2>
            <p><strong>Climate: </strong>{climate}</p>
            <p><strong>Terrain: </strong>{terrain}</p>
            <p><strong>Surface Water: </strong>{water}</p>
            <p><strong>Population: </strong>{population}</p>
        </>
    )
}

export default Planets