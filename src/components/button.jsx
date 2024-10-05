const Button = (props)=>{

return (

<>
<button
 className="border bg-teal-500 p-2 rounded-lg
 ml-5 text-white" onClick={props.functions} onMouseEnter={props.hover} onMouseLeave={props.mouseleave} > 
 {props.button}</button>
</>
)

}

export default Button;