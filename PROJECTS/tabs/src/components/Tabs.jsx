import React, { useState } from 'react'
import Tab from './Tab'

const Tabs = (props) => {
    const [detail, setDetail] = useState("Hello there! Please click a tab to see its content")
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                {
                    props.tabs.map((tab, index) => {
                        return (<Tab 
                            key={index} 
                            tab={tab} 
                            setDetail={setDetail}/>)
                    })
                }
            </div>
            <fieldset>
                <legend>Content</legend>
                {detail}
            </fieldset>
        </>
    )
}

export default Tabs