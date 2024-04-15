import ReactDOM from "react-dom/client";

function Greeting() {
    return <p>Welcome to this book!</p>
}

function App() {
    return (
        <div>
            <h2>Hello World!</h2>
            <Greeting/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render((
    <div>
        <h2>Hello World!</h2>
        <p>Welcome to this book!</p>
    </div>
),document.getElementById('app')) ;