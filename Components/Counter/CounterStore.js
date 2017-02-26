import {eventBus, createStore} from "../../fluxLib";
export default createStore({
    INIT() {
        return {
            number: 1
        }
    },
    INCREMENT(state) {
        state.number += 1;
    },
    DECREMENT(state) {
        state.number -= 1;
    }
});
