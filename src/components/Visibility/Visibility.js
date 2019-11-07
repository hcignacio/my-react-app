import React, { Component } from 'react'
import "./Visibility.css";

export default class Visibility extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: 'true'
        };
        this.visibilityFn = this.visibilityFn.bind(this);
    }

    visibilityFn() {
        if (this.state.toggle === 'true') {
            this.setState({ toggle: 'false' });
        } else if (this.state.toggle === 'false') {
            this.setState({ toggle: 'true' });
        }
    }

    classFn() {
        let classFinal;
        if (this.state.toggle === 'true') {
            classFinal = 'Visible';
        } else if (this.state.toggle === 'false') {
            classFinal = 'NotVisible';
        }
        return classFinal;
    }

    render() {
        return (
            <div>
                <button onClick={this.visibilityFn}>Visibility</button>
                <h3 className={(this.state.toggle === 'true') ? "Visible" : "NotVisible"}>
                    Visible
                </h3>
                <h3 className={(this.state.toggle === 'false') ? "Visible" : "NotVisible"}>
                    Invisible
                </h3>
            </div>
        )
    }
}
