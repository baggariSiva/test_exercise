import React from "react";
import {render} from "react-dom";
import {Provider} from "mobx-react";
import CounterStore from "./counterStore";
import App from "./App";

const rootElement = document.getElementById("root");
render(
    <Provider counterStore={CounterStore}>
        <App title="" />
    </Provider>,
    rootElement
);
