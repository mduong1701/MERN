import React from 'react';
import myStyle from './Main.module.css';

const Pagination = () => {
    return (
        <div className={myStyle.pagination}>
            <div>Showing 1-7 of 80</div>
            <div>1 2 3 4 5 ... 12 ></div>
        </div>
    )
}

export default Pagination