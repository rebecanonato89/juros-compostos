/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState }  from "react";
import useForm from "../../controllers/useForm";
import { Container } from './styles';


export default () => {
    const [{ values, loading }, handleChange, handleSubmit] = useForm();
    const [results, setResults] = useState([]);

    const enviarValores = () => {
      const capitalInicial  = parseFloat(values.montanteInicial) || null;
      const rate    = parseFloat(values.taxaJurosMensal) || null;
      const period  = parseInt(values.periodoMeses) || null;
      const monthSaving = 0;

      let totalAmount = capitalInicial;
      let taxaJurosPorcentagem = rate / 100;
      let aux = 0;

      for (let i = 1 ; i <= period ; i++) {

        aux = (1 + taxaJurosPorcentagem);

        totalAmount = capitalInicial * aux + totalAmount;
   
        results.push({ month: i, totalAmount: totalAmount.toFixed(2)});
      };

        setResults(results);
        console.log({ results });
    };

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
              <div className="input-field col s6">
                <input
                  onChange={handleChange}
                  name="aporteMensal" 
                  id="aporteMensal" 
                  type="number" 
                  className="validate"
                  required 
                  step="0.01"
                  min="0" 
                  max="99999"
                />
                <label htmlFor="aporteMensal">Aporte Mensal</label>
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
                  max="90"
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

        <ul>
          { results.map((row, i) => 
            <li key={i}>
              <strong scope='row'>{row.month}</strong>
              <p>R${row.saving}</p>
            </li>
          )}
        </ul>

      </div> 
    
    );
}
