import { combineReducers } from "redux";
import darkReducer from "./dark";
import counterReducer from "./counter";

const reducer = combineReducers({
    dark:darkReducer,
    counter:counterReducer,
})

export default reducer;