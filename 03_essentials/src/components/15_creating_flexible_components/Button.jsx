export default function Button({children, className, mode = "filled", Icon, ...props}) {
    // Todo: Build this component!

    // !!! Important:
    // Wrap the icon with a <span className="button-icon"> to achieve the target look
    // Also wrap the children prop with a <span>

    let boton = `button ${mode}-button`;
    let icono = ""
    if (Icon) {
        icono = (<span className="button-icon"><Icon/></span>);
        boton += " icon-button";
    }

    if (className) {
        boton += ' ' + className;
    }
    
    return (
        <>
            <button {...props}
                    className={boton}
            >
                {icono}
                <span>{children}</span>
            </button>
        </>
    )
}
