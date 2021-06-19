import React from "react";
import renderer, {act} from "react-test-renderer";
import Timer from "../Timer";

it("renders correctly", () => {
    jest.useFakeTimers();
    const tree = renderer.create(<Timer />).toJSON();
    act(() => {
        jest.advanceTimersByTime(1000);
    });
    expect(tree).toMatchInlineSnapshot();
});
