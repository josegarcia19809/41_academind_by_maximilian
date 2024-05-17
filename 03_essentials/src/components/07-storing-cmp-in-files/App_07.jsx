import React from 'react';
import Header from "./Header/Header.jsx";
import {CORE_CONCEPTS} from "./data.js";
import CoreConcept from "./CoreConcept.jsx";
import TabButton from "./TabButton.jsx";

function App07() {

    const [selectedTopic, setSelectedTopic] = React.useState("Please click a button");

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
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
                        <TabButton
                            onSelect={() => handleSelect("components")}>Components</TabButton>
                        <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
                        <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
                        <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
                    </menu>
                    {selectedTopic}
                </section>
            </main>
        </>
    );
}

export default App07;