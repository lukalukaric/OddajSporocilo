function Button(props) {
    return (
        <a href={props.link}><button className={ props.class } style={{ margin: "5px" }}>{props.text}</button></a>
    )
}

export default Button;