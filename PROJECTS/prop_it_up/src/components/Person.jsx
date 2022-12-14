import React from 'react'

class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            p_age: this.props.age
        };
    }

    increaseAge = () => {
        console.log("Hello");
        this.setState({ p_age: this.state.p_age + 1 });
        // this.setState((state) => {
        //     return { p_age: state.p_age + 1 };
        // });
    }

    render() {
        return (
            <fieldset>
                <h2>{this.props.last_name}, {this.props.first_name}</h2>
                <p>Age: {this.state.p_age}</p>
                <p>Hair color: {this.props.hair_color}</p>
                <button onClick={this.increaseAge}>Birthday Button for {this.props.first_name} {this.props.last_name}</button>
            </fieldset>
        );
    }
}

export default Person;