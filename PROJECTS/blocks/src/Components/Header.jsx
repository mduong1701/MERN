import React from 'react';
import mystyles from './myStyle.module.css';

class Header extends React.Component {
    render() {
        return (
            <div className={ mystyles.header }></div>
        );
    }
}

export default Header;