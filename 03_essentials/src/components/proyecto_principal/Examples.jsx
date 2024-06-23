import React from "react";
import TabButton from "./TabButton.jsx";
import {EXAMPLES} from "./data.js";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

function Examples() {
    const [selectedTopic, setSelectedTopic] = React.useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    const buttons = (
        <>
            <TabButton
                isSelect={selectedTopic === "components"}
                onClick={() => handleSelect("components")}
            >
                Components
            </TabButton>
            <TabButton
                isSelect={selectedTopic === "jsx"}
                onClick={() => handleSelect("jsx")}
            >
                JSX
            </TabButton>
            <TabButton
                isSelect={selectedTopic === "props"}
                onClick={() => handleSelect("props")}
            >
                Props
            </TabButton>
            <TabButton
                isSelect={selectedTopic === "state"}
                onClick={() => handleSelect("state")}
            >
                State
            </TabButton>
        </>
    )

    return (
        <>
            <Section title="Examples" id="examples">
                <Tabs
                    buttonsContainer="menu"
                    buttons={buttons}
                />

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

            </Section>
        </>
    );
}

export default Examples;