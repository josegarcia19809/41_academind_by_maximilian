import ReactDOM from "react-dom/client";

import Todo from './todo';
import GoalItem from "./GoalItem.jsx";


function TodoList() {

    const user = {name: 'Max', age: 29};
    const {name, age} = user; // <-- esto es la desestructuración de objetos en acción
    console.log(name); // muestra 'Max'
    const config = {href: 'https://some-site.com', download: true};


    function Product({title, price, id}) {
        // desestructuración en acción

        // title, price, id ahora están disponibles como variables dentro de esta función
    }

    const productData = {title: 'Un libro', price: 29.99, id: 'p1'}
    return (
        <>
            <ul>
                <Link href="https://some-site.com">Haz clic aquí</Link>
                <GoalItem id="g2" title="¡Aprender todo sobre React!"/>
            </ul>
        </>
    )
}

function Greeting() {
    return React.createElement('p', {}, 'Hello World!');
}

function App() {
    const userName = 'Max';
    return <p>Hi, my name is {userName}!</p>;
}

function calculate(a, b) {
    return [
        a + b,
        a - b
    ];
}

function Advertisement() {
    return React.createElement(
        'a',
        {href: ' https://my-website.com '},
        'Visit my website'
    );
}

function Alert() {
    return React.createElement(
        'div', {}, React.createElement('h2', {}, 'This is an alert!')
    );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render((
    <div>
        <h2>Hello World!</h2>
        <p>Welcome to this book!</p>
    </div>
), document.getElementById('app'));

function NavItem(props) {
    return <div><AnimatedLink target={props.target} text="Some text"/></div>;
}

function AnimatedLink(props) {
    return <a href={props.target}>{props.text}</a>;
}
