import {observable, action, makeAutoObservable} from "mobx";

export class CounterStore {
    constructor() {
        makeAutoObservable(this);
    }
    @observable counter = 0;

    @action
    increment(): number {
        return this.counter++;
    }

    @action
    decrement(): number {
        return this.counter--;
    }
}

export default new CounterStore();
