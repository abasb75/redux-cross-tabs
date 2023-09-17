
import { Action } from "../../states/types";
import initialState from "../initialState";

export default function counterReducer(state=initialState.counter,action:Action){
    switch(action.type){
        case 'COUNTER_UP':
            return {
                ...state,
                counter:state.counter+1,
            }
        case 'COUNTER_DOWN':
            return {
                ...state,
                counter:state.counter-1,
            }
        default:
            return state;
    }
}