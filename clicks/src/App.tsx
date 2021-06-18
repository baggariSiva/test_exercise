import React from "react";
import "./components/App.css";
import {inject, IWrappedComponent, observer} from "mobx-react";
import {CounterStore} from "./counterStore";

type StoreProps = {
    counterStore: CounterStore;
};

interface Props extends StoreProps {
    title: string;
}

@inject("counterStore")
@observer
class App extends React.Component<Props> {
    static defaultProps = {} as StoreProps;
    constructor(props) {
        super(props);
    }

    render() {
        const {counterStore, title} = this.props;

        return (
            <div className="App">
                <div>{title}</div>
                <div className="Number">Clicks: {counterStore.counter}</div>
                {console.log("counter", counterStore)}
                {console.log("props", this.props)}
                <div className="Button">
                    <span>
                        <button style={{marginRight: 100}} onClick={() => counterStore.increment()}>
                            Increment
                        </button>
                    </span>
                    <span>
                        {" "}
                        <button onClick={() => counterStore.decrement()}>Decrement</button>
                    </span>
                </div>
            </div>
        );
    }
}

export default App as typeof App & IWrappedComponent<Props>;
