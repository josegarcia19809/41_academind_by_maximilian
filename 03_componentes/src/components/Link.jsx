function Link({children, config}) {
    return <a {...config} target="_blank" rel="noopener noreferrer">{children}</a>;
}


export default Link;