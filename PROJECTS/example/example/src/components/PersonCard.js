import React, { Component } from 'react';

class PersonCard extends Component {
    render() {
        return(
            <div>
                <h2>{this.props.first_name}, {this.props.last_name}</h2>
                <div>Age: {this.props.age}</div>
                <div>Hair Color: {this.props.hair_color}</div>
            </div>
        );
    }
}
export default PersonCard;