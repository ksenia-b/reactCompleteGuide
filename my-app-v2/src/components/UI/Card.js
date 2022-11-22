import './Card.css';

function Card(props){
    const classes = 'card ' + props.className;

    // children is a reserved tag, we don't set it
    return <div className={classes}>{props.children}</div>;
}

export default Card;