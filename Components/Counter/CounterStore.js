import {eventBus} from "../../fluxLib";
const External = {
    state: {
        number: 1
    },
    INCREMENT() {
        this.state.number += 1;
        eventBus.publish("CounterStore_onChange");
    },
    DECREMENT() {
        this.state.number -= 1;
    }
};

const getState = ()=> {
    return External.state;
};

export {
    getState,
    External
}