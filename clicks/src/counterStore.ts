import {observable, action, makeAutoObservable} from "mobx";

export class CounterStore {
    counter=0;
    constructor() {
        makeAutoObservable(this,{
            counter:observable,
            increment:action,
            decrement:action,
        });
    }
    increment=(): void=> {
         this.counter++;
    }
    decrement=(): void=> {
        this.counter--;
   }
}
export default CounterStore;
