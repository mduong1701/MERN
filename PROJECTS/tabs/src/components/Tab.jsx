import React, { useState } from 'react'

const Tab = (props) => {
    const [isClicked, setClicked] = useState(false)
    const handleClick = () => {
        props.setDetail(props.tab.content)
        setClicked(true)
    }
    
    return (
        <button
            onClick={handleClick}
            style={{
                height: '30px',
                width: '100px',
                border: '2px solid black',
                margin: '0 5px',
                backgroundColor: 'blue'
            }}>
            {props.tab.label}
        </button>
    )
}

export default Tab