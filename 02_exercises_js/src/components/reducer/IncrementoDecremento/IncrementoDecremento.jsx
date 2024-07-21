import { useReducer } from "react";

import "./IncrementoDecremento.css";

function IncrementoDecremento() {
    // Estado inicial
    const initialState = { count: 0 };

    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return { count: state.count + action.payload };
            case "decrement":
                return { count: state.count - 1 };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <div>
                <p>Count: {state.count}</p>
                <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
                    Increment
                </button>
                <button onClick={() => dispatch({ type: "decrement" })}>
                    Decrement
                </button>
            </div>
        </>
    );
}

export default IncrementoDecremento;
