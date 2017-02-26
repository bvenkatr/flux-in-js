import EventBus from "./eventBus";
const eventBus = new EventBus();

const createStore = (External)=> {
    const state = External.INIT();
    let randomStoreId = `randomId-${Date.now()}`;

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
