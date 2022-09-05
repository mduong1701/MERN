import React from 'react'

const Box = (props) => {
    const style = {
        backgroundColor: props.box.color,
        height: props.box.height,
        width: props.box.width
    }

    return (
        <div style={style}>
        </div>
    )
}

export default Box