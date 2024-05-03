function GoalItem(props) {
    return <li>{props.children} (ID: {props.id})</li>;
}

export default GoalItem;