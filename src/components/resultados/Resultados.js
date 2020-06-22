import React from "react";
import { Container } from "./styles";

function Resultados({results}) {
    
    
    return(
        <Container>
            <ul>
                { results.map((row, i) => 
                    <li key={i}>
                    <strong scope='row'>{row.month}</strong>
                    <p>R${row.totalAmount}</p>
                    </li>
                )}
            </ul>
        </Container>
    )
}

export default Resultados;