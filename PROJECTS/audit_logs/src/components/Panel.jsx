import React from 'react';
import myStyle from './Main.module.css';

const Panel = () => {
    return (
        <div className={myStyle.spaceBetween}>
            <div>🗓 Starting time - Ending time</div>
            <div className={myStyle.justifyRight}>
                <div>🔍</div>
                <div>
                    <select>
                        <option value="">Select a Filter</option>
                    </select>
                </div>
                <div>🎛</div>
            </div>
        </div>
    )
}

export default Panel