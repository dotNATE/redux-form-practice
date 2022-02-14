import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import counterReducer from "./counter";
import loggedReducer from "./isLogged";


const rootReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    form: formReducer,
})

export default rootReducer;