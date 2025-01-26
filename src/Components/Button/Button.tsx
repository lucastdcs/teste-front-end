import "./Button.scss";

type Buttonprops = {
    text: string,
    className: string,
    typeBtn?: "button" | "submit" | "reset";
}
function Button ({text, className, typeBtn}: Buttonprops){
return(
    <button className={`styled-button ${className || ""}`} type={typeBtn}>
        {text}
    </button>
)
}

export default Button;