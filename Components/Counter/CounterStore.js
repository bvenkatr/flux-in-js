import {eventBus} from "../../fluxLib";
const External = {
    INIT() {
        return {
            number: 1
        }
    },
    INCREMENT() {
        state.number += 1;
        eventBus.publish("CounterStore_onChange");
    },
    DECREMENT() {
        state.number -= 1;
        eventBus.publish("CounterStore_onChange");
    }
};
const state = External.INIT();
const getState = ()=> {
    return state;
};

Object.keys(External).forEach(function (key) {
    if (key !== "INIT") {
        eventBus.subscribe(key, function (...args) {
            External[key](...args);
        });
    }
});

export {
    getState,
    External
}
