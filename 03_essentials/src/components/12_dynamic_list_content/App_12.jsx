import React from 'react';

import Todo from './Todo'
import "./index.css";
// don't remove the export keyword here!
export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

// don't change the Component name "App"
export default function App_12() {
    return (
        <>
            <ul>
                {DUMMY_TODOS.map(todo => <Todo key={todo.id} text={todo}/>)}
            </ul>
        </>
    )
}
