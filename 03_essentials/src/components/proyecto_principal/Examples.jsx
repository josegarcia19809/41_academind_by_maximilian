import React from "react";
import TabButton from "./TabButton.jsx";
import {EXAMPLES} from "./data.js";

function Examples() {
    const [selectedTopic, setSelectedTopic] = React.useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }
    return (
        <>
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
        </>
    );
}

export default Examples;