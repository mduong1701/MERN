import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Hero = (props) => {

    const [hero, setHero] = useState(null)

    const { heroId } = useParams()

    const navigate = useNavigate()

    console.log(heroId)
    useEffect(() => {
        axios.get(`https://akabab.github.io/superhero-api/api/id/${heroId}.json`)
            .then(res => {
                console.log(res.data)
                setHero(res.data)
            })
            .catch(err => {
                console.log("XXXXX", err)
                navigate('/error', {replace: true})
            })
    }, [heroId])

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div>
            {
                hero ? (
                    <>
                        <h2>{hero.name}</h2>
                        <img src={hero.images.md} alt={hero.name} height="200" />
                        <button onClick={goBack}>Back</button>
                    </>
                )
                    : <>Loading ...</>
            }
        </div>
    )
}

export default Hero