import React from "react" ;

  
function Button(props) {
    return (
                <img id={props.id} alt={props.name} value ={props.value} className ="userOption" onClick={() => props.nextPic(props.id)} src={props.image} />
             )
}
export default Button;
