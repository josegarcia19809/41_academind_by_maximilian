import componentsImg from "../assets/components.png";
import configImg from "../assets/config.png";

const UsingProps = (props) => {
    return (
        <>
            <li>
                <img src={props.image} alt={props.title}/>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </li>
        </>
    );
};

export const UsingPropsApp = () => {
    return (
        <>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <UsingProps
                            title="Components"
                            description="The core UI building block - compose the user interface
                            by combining multiple components."
                            image={componentsImg}
                        />
                        <UsingProps
                            title="Config"
                            description="Return (potentially dynamic) HTML(ish) code to
                            define the actual markup that will be rendered."
                            image={configImg}
                        />
                    </ul>
                </section>
            </main>
        </>
    );
}

export default UsingProps;