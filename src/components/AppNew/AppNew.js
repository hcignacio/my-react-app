import React from 'react';
import Visibility, {  } from "../Visibility/Visibility";

class AppNew extends React.Component {

    /* const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) => <li>{number}</li>); */

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
        this.numbers = [1, 2, 3, 4, 5];
        this.listItems = this.numbers.map((number) => <li>{number}</li>);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <ul>{this.listItems}</ul>
                <Visibility/>
            </div>
        );
    }
};

export default AppNew