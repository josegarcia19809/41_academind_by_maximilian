import React from 'react';

const App11 = () => {

    const [active, setActive] = React.useState(false);

    function toggleActive() {
        setActive(prevActive => !prevActive);
    }

    return (
        <div>
            <p className={active ? "active" : ""}>Style me!</p>
            <button onClick={toggleActive}>Toggle style</button>
        </div>
    );
};

export default App11;