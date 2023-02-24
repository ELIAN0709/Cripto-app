import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: 10px;
  border: none;
  font-size: 1.4rem;
  background-color: #ac3838;
  color: #fff;
`;

const useCriptomoneda = (label, stateInicial, opciones) => {
  // state del hooks
  const [state, actualizarState] = useState(stateInicial);

  // nombre del select
  const SelectCripto = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select
        onChange={(evento) => actualizarState(evento.target.value)}
        value={state}
      >
        <option value="">-- Seleccione la Criptomoneda --</option>
        {opciones.map(opcion => (
            <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
        ))}
      </Select>
    </Fragment>
  );

    // retorno de las variables del state 
    return [state, SelectCripto, actualizarState];
};

export default useCriptomoneda;
