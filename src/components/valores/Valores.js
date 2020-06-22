import React, { useState, useEffect }  from "react";
import useForm from "../../controllers/useForm";
import { Container } from "./styles";
import Resultados from "../resultados/Resultados";


export default () => {
    const [{ values, loading }, handleChange, handleSubmit] = useForm();
    const [results, setResults] = useState([]);

    const enviarValores = () => {
      const capitalInicial  = parseFloat(values.montanteInicial) || null;
      const rate    = parseFloat(values.taxaJurosMensal) || null;
      const period  = parseInt(values.periodoMeses) || null;
      const resultsAux = [];

      let totalAmount = 0;
      let valorMensalPorcentagem = 0;
      let valorMensal = 0;
      let taxaJurosPorcentagem = rate / 100;

      for (let i = 1 ; i <= period ; i++) {

        totalAmount = capitalInicial * ((1 + taxaJurosPorcentagem)**i);

        valorMensal = totalAmount - capitalInicial;

        valorMensalPorcentagem = (valorMensal * 100)/capitalInicial;

        resultsAux.push({ month: i, totalAmount: totalAmount.toFixed(2), valorMensal: valorMensal.toFixed(2), valorMensalPorcentagem: valorMensalPorcentagem.toFixed(2)});
      };
      setResults(resultsAux);
    };

    useEffect(() => {
      return () => {
        setResults([]);
      }
    },[]);

    return (
      <div className="row">
        <Container>
          <div className="row titulo">
            <h1>Juros Composto</h1>
          </div>
          <form className="col s12" onSubmit={handleSubmit(enviarValores)}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  onChange={handleChange}
                  name="montanteInicial" 
                  id="montanteInicial" 
                  type="number" 
                  className="validate"
                  required 
                  step="0.01"
                  min="1000" 
                  max="99999"
                />
                <label htmlFor="montanteInicial">Montante Inicial</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  onChange={handleChange}
                  name= "taxaJurosMensal" 
                  id="taxaJurosMensal" 
                  type="number" 
                  className="validate"
                  required 
                  step="0.01"
                  min="-99999.99" 
                  max="999999.99" 
                />
                <label htmlFor="taxaJurosMensal">Taxa de Juros Mensal</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  onChange={handleChange}
                  type="number" 
                  id="periodoMeses" 
                  name="periodoMeses" 
                  className="validate" 
                  required 
                  pattern="[0-9]+$"
                  min="1" 
                  max="900"
                />
                <label 
                  htmlFor="periodoMeses" 
                  data-error="Preencha o campo com a quantidade de meses" 
                  className="active">Período (meses)
                </label>
              </div>
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action">{loading ? "Enviando..." : "Enviar"}</button>
          </form>
        </Container>

        <Resultados results={results} />

      </div> 
    
    );
}
