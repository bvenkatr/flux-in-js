import React from "react";
import {getState, External} from "./CounterStore";
import {eventBus} from "../../fluxLib";

const style = {
    padding: 20,
    border: "1px solid black"
};

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = getState();
        eventBus.subscribe("CounterStore_onChange", function () {
            this.setState(getState());
        }.bind(this));
    }

    increment() {
        External.INCREMENT();
    }

    decrement() {
        External.DECREMENT();
        this.setState(getState());
    }

    render() {
        return <div style={style}>
            <h1>{this.state.number}</h1>
            <div>
                <button onClick={this.increment.bind(this)}>Add</button>
                <button onClick={this.decrement.bind(this)}>Subtract</button>
            </div>
        </div>
    }
}

export default Counter;
