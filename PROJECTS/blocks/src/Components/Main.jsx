import React from 'react';
import mystyles from './myStyle.module.css';
import SubContents from './SubContents';
import Advertisement from './Advertisement';

class Main extends React.Component {
    render() {
        return (
            <div className={mystyles.main}>
                <div className={mystyles.bottom}>
                    <div className={mystyles.threeSub}>
                        <SubContents />
                        <SubContents />
                        <SubContents />
                    </div>
                    <div>
                        <Advertisement />
                    </div>
                </div>
            </div>

        );
    }
}

export default Main;