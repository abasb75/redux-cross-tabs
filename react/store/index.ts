import { createStore } from "../../src";
import { Store } from "../../src/types";
import initialState from "./initialState";
import reducer from "./reducer";

const store:Store = createStore(
    reducer,
    initialState,
    undefined,
    {
        storageItems:['counter','dark']
    }
);

export default store;