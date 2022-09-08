import React from 'react'
import { useParams } from 'react-router-dom';

const Number = (props) => {

    const { number } = useParams()

    return (
        <div>
            {
                isNaN(number)
                    ? <div>The word is: {number}</div>
                    : <div>The number is: {number}</div>
            }
        </div>

    )
}

export default Number