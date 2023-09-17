import initialState from "../initialState";

interface DarkAction {
    type:'DARK',
}

export default function darkReducer(state=initialState.dark,action:DarkAction){
    switch(action.type){
        case 'DARK':
            return {
                ...state,
                dark:!state.dark,
            }
        default:
            return state;
    }
}