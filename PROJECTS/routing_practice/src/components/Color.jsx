import React from 'react';
import { useParams } from 'react-router-dom';

const Color = (props) => {

    const { word, color, bg } = useParams()

    const style = {
        color: color,
        backgroundColor: bg,
        marginTop: "10px",
        padding: "10px"
    }

    return (
        <div style = { style }>The word is: { word }</div>
    )
}

export default Color