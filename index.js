import React from "react";
import ReactDom from "react-dom";
import Counter from "./Components/Counter/Counter";

ReactDom.render(<div>
    <Counter/>
    <Counter/>
</div>, document.querySelector("#app"));

setTimeout(function () {
    ReactDom.render(<div>
        <Counter/>
    </div>, document.querySelector("#app"));
}, 4000);
