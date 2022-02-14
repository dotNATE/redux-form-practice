import React from "react";
import { useSelector, useDispatch } from "react-redux"

import { increment, decrement } from "../actions";

function Counter() {
    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch();

    return (
        <div>
            <div>{counter}</div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>

            { isLogged && <h3>LoggedIn only</h3> }
        </div>
    )
};

export default Counter;