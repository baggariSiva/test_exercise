import * as React from "react";
import App from "../App";
import {Provider} from "mobx-react";
import CounterStore from "../counterStore";
import renderer from "react-test-renderer";

it("App renders correctly", () => {
    const tree = renderer.create(
        <Provider counterStore={CounterStore}>
            <App title="" />
        </Provider>
    );
    expect(tree).toMatchInlineSnapshot(`
        <div
          className="App"
        >
          <div
            className="sc-bdnxRM jYRkKf"
          >
            <div>
              
            </div>
             
            <h2>
              Clicks: 
              0
            </h2>
            <p>
              <span>
                <button
                  onClick={[Function]}
                  style={
                    Object {
                      "marginRight": 100,
                    }
                  }
                >
                  Increment
                </button>
              </span>
              <span>
                 
                <button
                  onClick={[Function]}
                >
                  Decrement
                </button>
              </span>
            </p>
          </div>
        </div>
    `);
});
