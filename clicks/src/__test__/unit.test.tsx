import CounterStore from "../counterStore";

describe("Counter Store", () => {
    test("check initial count", () => {
        const count = new CounterStore();
        expect(count.counter).toEqual(0);
    });
    test("count increment correctly", () => {
        const count = new CounterStore();
        count.increment();
        count.increment();
        expect(count.counter).toEqual(2);
    });
    test("count increment correctly", () => {
        const count = new CounterStore();
        count.decrement();
        expect(count.counter).toEqual(-1);
    }); 
});
