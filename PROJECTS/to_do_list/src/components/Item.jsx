import React from 'react'

const Item = (props) => {

    return (
        <div className='item'>
            {/* Display the task */}
            {
                props.item.checked
                ? <div><del>{props.item.name}</del></div>
                : <div>{props.item.name}</div>
            }
            {/* Display the checkbox */}
            <input 
                type="checkbox" 
                onClick={
                    () => props.isChecked(props.item.name)
                }
            />
            {/* Display the delete button */}
            <button
            // Style of the delete button
                style={{
                    display: 'block',
                    height: '30px',
                    width: '80px',
                    backgroundColor: 'red',
                    borderRadius: '5px'
                }}
            // The task disappears when the delete button is clicked
                onClick={
                    () => props.deleteItem(props.item.name)}
            >
                Delete
            </button>
        </div>
    )
}

export default Item