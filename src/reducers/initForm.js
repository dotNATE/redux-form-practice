const initFormReducer = (state = {}, action) => {
    switch(action.type) {
        case "LOAD":
            return {
                data: action.payload,
            }
        default:
            return state;
    }
}

export default initFormReducer;