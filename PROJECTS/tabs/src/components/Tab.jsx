import React from 'react'

const Tab = (props) => {
    
    return (
        <button
            onClick={ () => {props.setDetail(props.tab.content)} }
            style={{
                height: '30px',
                width: '100px',
                border: '2px solid black',
                margin: '0 5px',
                backgroundColor: 'green'
            }}>
            {props.tab.label}
        </button>
    )
}

export default Tab