import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import initFormReducer from "./initForm";


const rootReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    initialValues: initFormReducer,
    form: formReducer,
})

export default rootReducer;