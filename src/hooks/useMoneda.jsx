import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
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
    background-color: #6740a2eb;
    color: #fff;
`;


const useMoneda = (label, stateInicial, opciones) => {
  // estado del custon hooks
  const [state, actualizarState] = useState(stateInicial);

  const Seleccionar = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select
      onChange={ event=>actualizarState(event.target.value)}
      value={state}
      >
        <option value="">-- Seleccione la Moneda --</option>
        {opciones.map((opcion) => (
          <option key={opcion.codigo} value={opcion.codigo}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  // retornar el state interface y el stado modificado
  return [state, Seleccionar, actualizarState];
};

export default useMoneda;
