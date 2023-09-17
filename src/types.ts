import type { Store as ReduxStore } from "../node_modules/redux";
import { Action } from "../node_modules/redux";
import type { Middleware as ReduxMiddleware } from "../node_modules/redux";

interface StoreParams {
    storageItems:string[],
    storageKey:string,
    actionType:string,
}

interface OptionalStoreParms{
    storageItems?:string[],
    storageKey?:string,
    actionType?:string,
}

interface Store<
S = any,
A extends Action=any,
StateExt extends {} = {}

> extends ReduxStore<
S,A
> {
    params?:StoreParams,
}

type Middleware = ReduxMiddleware | {};

interface StorageObject {
    key:string,
    value:string,
}

export type {
    StoreParams,
    OptionalStoreParms,
    Store,
    ReduxStore,
    Action,
    Middleware,
    StorageObject,
};