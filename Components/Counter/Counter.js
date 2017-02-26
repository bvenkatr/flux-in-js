import React from "react";
import CounterStore from "./CounterStore";
import {eventBus} from "../../fluxLib";

const style = {
    padding: 20,
    border: "1px solid black"
};

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = CounterStore.getState();
        this.unsub = CounterStore.onChange(function () {
            this.setState(CounterStore.getState());
        }.bind(this));
    }

    componentWillUnmount() {
        this.unsub();
    }

    increment() {
        eventBus.publish("INCREMENT");
    }

    decrement() {
        eventBus.publish("DECREMENT");
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
