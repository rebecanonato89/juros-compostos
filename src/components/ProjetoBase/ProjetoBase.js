import React from 'react';
import useForm from "../../controllers/useForm";
import { Container } from './styles';
import 'materialize-css/dist/css/materialize.min.css';

export default () => {

    const [{ values, loading }, handleChange, handleSubmit] = useForm();

    const enviarContato = () => {
      // faça o que for preciso :)
      console.log(values);
    };

    return (
      <div class="row">
        <Container>
          <h1>Juros Composto</h1>
          <form onSubmit={handleSubmit(enviarContato)} class="col s12">
            <div class="row">
              <div class="input-field col s6">
                <input
                  onChange={handleChange}
                  type="text"
                  name="montanteInicial"
                  id="first_name"
                />
                <label for="first_name">Montante Inicial</label>
              </div>
            </div>
            <button type="submit">{loading ? "Enviando..." : "Enviar"}</button>
          </form>
        
        </Container>
      </div>
    );
}
