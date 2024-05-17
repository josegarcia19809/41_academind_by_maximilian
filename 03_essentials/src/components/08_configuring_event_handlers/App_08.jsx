export const user = {
    name: '',
};
const App08 = () => {
    // Your goal: This function should be called WITH A VALUE for name when the <button> is clicked
    function handleCreateUser(name) {
        user.name = name;
        console.log({user})
    }

    return (
        <div id="app">
            <h1>User Login</h1>
            <p>
                <label>Name</label>
                {/* You don't need to do anything with this input! You'll learn how to handle user input later */}
                <input type="text" />
            </p>

            <p id="actions">
                <button onClick={() => handleCreateUser("jose")}>Create User</button>
            </p>
        </div>
    );
};

export default App08;