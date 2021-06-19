import React from "react";
import {inject, IWrappedComponent, observer} from "mobx-react";
import {CounterStore} from "./counterStore";
import styled from "styled-components";

const HomeStyles = styled.div`
    p {
        text-align: center;
    }
    h2 {
        margin: 5%;
        font-family: Roboto-Bold;
        font-size: 84px;
        color: #37474f;
        text-align: center;
    }

    button {
        text-align: centet;
        background: #5e19f5;
        border: 1px solid #979797;
        box-sizing: border-box;
        border-radius: 8px;
        padding: 10px;
        width: 250px;
        font-family: Roboto-Regular;
        font-size: 32px;
        color: #ffffff;
    }
`;

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
                <HomeStyles>
                    <div>{title}</div> <h2>Clicks: {counterStore.counter}</h2>
                    <p>
                        <span>
                            <button
                                style={{marginRight: 100}}
                                onClick={() => counterStore.increment()}
                            >
                                Increment
                            </button>
                        </span>

                        <span>
                            {" "}
                            <button onClick={() => counterStore.decrement()}>Decrement</button>
                        </span>
                    </p>
                </HomeStyles>
            </div>
        );
    }
}

export default App as typeof App & IWrappedComponent<Props>;
