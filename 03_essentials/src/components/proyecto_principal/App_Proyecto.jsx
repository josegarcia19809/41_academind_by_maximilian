import React from 'react';
import Header from "./Header/Header.jsx";
import {CORE_CONCEPTS} from "./data.js";
import CoreConcept from "./CoreConcept.jsx";
import TabButton from "./TabButton.jsx";
import {EXAMPLES} from "./data.js";

function App_Proyecto() {

    const [selectedTopic, setSelectedTopic] = React.useState();

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
                            isSelect={selectedTopic === "components"}
                            onSelect={() => handleSelect("components")}
                        >
                            Components
                        </TabButton>
                        <TabButton
                            isSelect={selectedTopic === "jsx"}
                            onSelect={() => handleSelect("jsx")}
                        >
                            JSX
                        </TabButton>
                        <TabButton
                            isSelect={selectedTopic === "props"}
                            onSelect={() => handleSelect("props")}
                        >
                            Props
                        </TabButton>
                        <TabButton
                            isSelect={selectedTopic === "state"}
                            onSelect={() => handleSelect("state")}
                        >
                            State
                        </TabButton>
                    </menu>

                    {!selectedTopic && <p>Please select a topic</p>}
                    {selectedTopic && (
                        <div id="tab-conten">
                            <h3>{EXAMPLES[selectedTopic].title}</h3>
                            <p>{EXAMPLES[selectedTopic].description}</p>
                            <pre>
                            <code>
                                {EXAMPLES[selectedTopic].code}
                            </code>
                        </pre>
                        </div>
                    )}

                </section>
            </main>
        </>
    );
}

export default App_Proyecto;