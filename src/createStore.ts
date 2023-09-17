import { Reducer ,StoreEnhancer, legacy_createStore } from "redux";
import createInitialState from "./createInitialState";
import createReducer from "./createReducer";
import { StoreParams,Store, OptionalStoreParms } from "./types";
import type { ProAction } from "./createReducer";

export default function createStore<
S,
A extends ProAction,
Ext extends {} = {},
StateExt extends {} = {},
PreloadedState = S
>(
    reducer:Reducer<S, A>,
    initialState:PreloadedState | undefined,
    middleware?: StoreEnhancer<Ext, StateExt>,
    params:StoreParams | OptionalStoreParms = {}
):Store<S,A,StateExt> & Ext{

    const storeParams:StoreParams = {
        storageItems:[],
        storageKey:'REDUX-PRO-4KJNDCO98NOEINEIEWNEW',
        actionType:'REDUX-PRO-EJ9EECNEEIODJEIOJEIEI',
        ...params,
    };
    
    const formedInitialState:PreloadedState | undefined = createInitialState(
        initialState,
        storeParams.storageKey,
        storeParams.storageItems
    );

    const store:Store & Ext= legacy_createStore(
        createReducer(
            reducer as Reducer,
            formedInitialState,
            storeParams.actionType
        ),
        formedInitialState as any,
        middleware
    );

    store.params = storeParams;
    return store;

}