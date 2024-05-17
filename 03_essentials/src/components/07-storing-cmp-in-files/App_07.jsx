import React from 'react';
import Header from "./Header/Header.jsx";
import {CORE_CONCEPTS} from "./data.js";
import CoreConcept from "./CoreConcept.jsx";
import TabButton from "./TabButton.jsx";

function App07() {

    function handleselect() {
        console.log("Hello world--select")
    }

    return (
        <>
            <Header/>
            <main>
                <section id={"core-concepts"}>
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image}
                        />
                        <CoreConcept {...CORE_CONCEPTS[1]} />
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} />

                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={handleselect}>Components</TabButton>
                        <TabButton onSelect={handleselect}>JSX</TabButton>
                        <TabButton onSelect={handleselect}>Props</TabButton>
                        <TabButton onSelect={handleselect}>State</TabButton>
                    </menu>
                    Dynamic Content
                </section>
            </main>
        </>
    );
}

export default App07;