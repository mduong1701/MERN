import React from 'react';
import mystyles from './myStyle.module.css';
import SubContents from './SubContents';
import Advertisement from './Advertisement';

class Main extends React.Component {
    render() {
        return (
            <div className={mystyles.main}>
                <SubContents />
                <Advertisement />
            </div>

        );
    }
}

export default Main;