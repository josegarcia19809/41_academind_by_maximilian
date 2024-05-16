const TabButton = ({children}) => {
    function handleClick() {
        console.log("Hello world")
    }
    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    );
};

export default TabButton;