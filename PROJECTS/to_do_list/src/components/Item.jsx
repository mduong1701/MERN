import React from 'react'

const Item = (props) => {

    return (
        <div className='item'>
            {
                props.item.checked
                ? <div><del>{props.item.name}</del></div>
                : <div>{props.item.name}</div>
            }
            
            <input 
                type="checkbox" 
                onClick={
                    () => props.isChecked(props.item.name)
                }
            />

            <button
                style={{
                    display: 'block',
                    height: '30px',
                    width: '80px',
                    backgroundColor: 'red',
                    borderRadius: '5px'
                }}
                onClick={
                    () => props.deleteItem(props.item.name)}
            >
                Delete
            </button>
        </div>
    )
}

export default Item