import React from 'react';
import Header from "./Header/Header.jsx";
import "../../index.css";
import CoreConcepts from "./CoreConcepts.jsx";
import Examples from "./Examples.jsx";

function App_Proyecto() {


    return (
        <>
            <Header/>
            <main>
                <CoreConcepts/>
                <Examples/>
            </main>
        </>
    );
}

export default App_Proyecto;