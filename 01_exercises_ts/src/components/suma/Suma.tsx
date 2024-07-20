import React, {useReducer} from "react";
import "./Suma.css";

type State = {
    number1: string;
    number2: string;
    result: number | null;
};

type Action =
    | { type: "SET_NUMBER1"; payload: string }
    | { type: "SET_NUMBER2"; payload: string }
    | { type: "CALCULATE_RESULT" };

const initialState: State = {
    number1: "",
    number2: "",
    result: null,
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "SET_NUMBER1":
            return {...state, number1: action.payload};
        case "SET_NUMBER2":
            return {...state, number2: action.payload};
        case "CALCULATE_RESULT": {
            const num1 = parseInt(state.number1, 10) || 0;
            const num2 = parseInt(state.number2, 10) || 0;
            return {...state, result: num1 + num2};
        }
        default:
            return state;
    }
};

const Suma: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Suma de Números</h1>
                <div>
                    <input
                        type="number"
                        value={state.number1}
                        onChange={(e) =>
                            dispatch({
                                type: "SET_NUMBER1",
                                payload: e.target.value,
                            })
                        }
                        placeholder="Número 1"
                    />
                </div>
                <div>
                    <input
                        type="number"
                        value={state.number2}
                        onChange={(e) =>
                            dispatch({
                                type: "SET_NUMBER2",
                                payload: e.target.value,
                            })
                        }
                        placeholder="Número 2"
                    />
                </div>
                <button onClick={() => dispatch({type: "CALCULATE_RESULT"})}>
                    Sumar
                </button>
                {state.result !== null && (
                    <div>
                        <h2>Resultado: {state.result}</h2>
                    </div>
                )}
            </header>
        </div>
    );
};

export default Suma;
