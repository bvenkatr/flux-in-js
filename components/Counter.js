import {createStore} from "../fluxLib";
import CounterReducer from "../reducers/CounterReducer";

const store = createStore(CounterReducer);
const render = () => {
    document.body.innerText = store.getState();
};

store.subscribe(render);

render();

document.addEventListener("click", () => {
   store.dispatch({type: "INCREMENT"});
});
