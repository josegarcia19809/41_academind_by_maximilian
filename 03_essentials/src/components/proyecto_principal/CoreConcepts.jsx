import {CORE_CONCEPTS} from "./data.js";
import CoreConcept from "./CoreConcept.jsx";
import React from "react";

function CoreConcepts() {
    return (
        <>
            <section id={"core-concepts"}>
                <h2>Core Concepts</h2>
                <ul>
                    {CORE_CONCEPTS.map((conceptIntem) => (
                        <CoreConcept {...conceptIntem} key={conceptIntem.title}/>
                    ))}
                </ul>
            </section>
        </>
    );
}

export default CoreConcepts;