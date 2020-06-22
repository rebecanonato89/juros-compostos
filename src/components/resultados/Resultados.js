import React from "react";
import { Container } from "./styles";

function Resultados({results}) {
    let mystyle = {
        color: "#000",
      };

    results.forEach(element => {
        
        if(element.valorMensal < 0){
            mystyle = {
                color: "#FF0F0F",
              };
        } else {
            mystyle = {
                color: "#4caf50",
              };
        }
    });

    return(
        <Container>
            <ul>
                { results.map((row, i) => 
                    <li key={i}>
                        <th scope='row'>{row.month}</th>
                        <p style={mystyle}>R${row.totalAmount}</p>
                        <p style={mystyle}>R${row.valorMensal}</p>
                        <p style={mystyle}>{row.valorMensalPorcentagem}%</p>
                    </li>
                )}
            </ul>
        </Container>
    )
}

export default Resultados;