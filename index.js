import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "./fluxLib";
import CounterReducer from "./reducers/CounterReducer";
import Counter from './components/Counter'

const store = createStore(CounterReducer);

const render = () => {
  ReactDOM.render(
      <Counter
          value={store.getState()}
          onIncrement={
              () => store.dispatch({type: "INCREMENT"})
          }
          onDecrement={
              () => store.dispatch({type: "DECREMENT"})
          }
      />,
      document.getElementById("app")
  );
};
render();
store.subscribe(render);
