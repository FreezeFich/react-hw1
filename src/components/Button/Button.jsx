import "./Button.css"

const Button = (props) =>{
    console.log("props", props)
    const {onClick,children} = props;

    return(
        <button onClick={props.onClick} className="button">
            {props.children}
        </button>
    )
}

export default Button