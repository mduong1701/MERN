// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'

const Pet = ({ pet }) => {

    return (
        <div style={{ backgroundColor: pet.eyeColor }}>
            {/* {JSON.stringify(allPets)} */}
            {pet.name}
        </div>
    )
}

export default Pet