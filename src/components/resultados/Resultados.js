import React from "react";

const Modal = props => {

    console.log(props);
    const { results } = props;    
    
    console.log(results);
    
    
    return(
        <div>
            <p>Meu modal!</p>
        </div>
    )
}

export default Modal;