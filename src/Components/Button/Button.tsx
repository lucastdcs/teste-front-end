import "./Button.scss";

type Buttonprops = {
    text: string,
    className: string
}
function Button ({text, className}: Buttonprops){
return(
    <button className={`styled-button ${className || ""}`}>
        {text}
    </button>
)
}

export default Button;