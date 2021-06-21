import * as React from "react";
import App from "../App";
import {Provider} from "mobx-react";
import CounterStore from "../counterStore";
import renderer from "react-test-renderer";

it('App renders correctly', () => {
  const tree = renderer
    .create(<Provider counterStore={CounterStore}>
      <App title="" />
  </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

   