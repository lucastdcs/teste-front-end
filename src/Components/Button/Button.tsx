import "./Button.scss";

type Buttonprops = {
    text: string,
    className?: string,
    typeBtn?: "button" | "submit" | "reset";
    onClick?: () => void;
}
function Button ({text, className, typeBtn, onClick}: Buttonprops){
return(
    <button className={`styled-button ${className || ""}`} type={typeBtn} onClick={onClick}>
        {text}
    </button>
)
}

export default Button;