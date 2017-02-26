import EventBus from "./eventBus";
const eventBus = new EventBus();
import uuid from "uuid";

const createStore = (External)=> {
    const state = External.INIT();
    let randomStoreId = uuid.v4();

    Object.keys(External).forEach(function (key) {
        if (key !== "INIT") {
            eventBus.subscribe(key, function (...args) {
                External[key](state, ...args);
                eventBus.publish(randomStoreId);
            });
        }
    });

    const getState = ()=> {
        return state;
    };

    const onChange = (calback)=> {
        return eventBus.subscribe(randomStoreId, calback)
    };

    return {
        getState,
        onChange
    }
};

export {
    eventBus,
    createStore
}
