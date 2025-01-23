import "./Button.scss";

type Buttonprops = {
    text: string
}
function Button ({text}: Buttonprops){
return(
    <button>
        {text}
    </button>
)
}

export default Button;