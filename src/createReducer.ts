import { Action,Reducer } from "redux";

interface ProAction extends Action{
    type:string,
    payload:any,
}

export default function createReducer<
S,
A extends ProAction
>(
reducer:Reducer<S,A>,
initialState:S,
actionType:string
):Reducer<S,A>{
    return function(state:S=initialState,action:A):S{
        switch(action.type){
            case actionType :
                return {
                    ...state,
                    ...action.payload
                };
            default:
                return reducer(state,action);
        }
    }
}

export type {ProAction};