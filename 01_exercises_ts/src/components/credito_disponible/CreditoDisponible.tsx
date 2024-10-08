import {ChangeEvent, FormEvent, useReducer, useState} from "react";
import "./CreditoDisponible.css";

type Credito = {
    cantidadMaxima: number;
    cantidadUtilizada: number;
    cantidadDisponible: number;
}

type Action =
    { type: "CALCULATE_RESULT", payload: { nuevoCredito: Credito } };

const initialState: Credito = {
    cantidadMaxima: 0,
    cantidadUtilizada: 0,
    cantidadDisponible: 0,
}

const creditoReducer =
    (state: Credito, action: Action): Credito => {
        switch (action.type) {
            case "CALCULATE_RESULT": {
                const {cantidadMaxima, cantidadUtilizada} = action.payload.nuevoCredito;
                const resultado = cantidadMaxima - cantidadUtilizada;
                return {...state, cantidadDisponible: resultado};
            }
            default:
                return state;
        }
    }


function CreditoDisponible() {
    const [state, dispatch] = useReducer(creditoReducer, initialState);
    const [credito, setCredito] = useState<Credito>(initialState);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setCredito(prevState => ({
            ...prevState,
            [e.target.id]: +e.target.value,
        }));
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch({type: "CALCULATE_RESULT", payload: {nuevoCredito: credito}})
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Crédito disponible</h1>
                <div>
                    <label htmlFor="cantidadMaxima">Cantidad máxima:</label>
                    <input
                        id="cantidadMaxima"
                        name="cantidadMaxima"
                        type="number" value={+credito.cantidadMaxima} onChange={handleChange}
                        placeholder="Ingrese cantidad máxima"/>
                </div>
                <div>
                    <label htmlFor="cantidadUtilizada">Cantidad máxima:</label>
                    <input
                        id="cantidadUtilizada"
                        name="cantidadUtilizada"
                        type="number" value={+credito.cantidadUtilizada} onChange={handleChange}
                        placeholder="Ingrese cantidad utilizada"/>
                </div>
                <div>
                    <input type="submit" value="Checar Credito disponible"/>
                </div>
            </form>
            <div>
                <h2>Crédito disponible: {state.cantidadDisponible}</h2>
            </div>
        </>
    );
}

export default CreditoDisponible;