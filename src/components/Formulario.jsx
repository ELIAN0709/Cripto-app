import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useMoneda from "../hooks/useMoneda";
import useCriptomoneda from "../hooks/useCriptomoneda";
import axios from "axios";
import Error from "./Error";

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Formulario = ({guardarMoneda, guardarcripto}) => {
  // state del formulario
  const [listacripto, guardarCriptomonedas] = useState([]);

  // state de error 
  const [error, guardarError] = useState(false) 


  // Monedas
  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar Estado Unidence" },
    { codigo: "MXN", nombre: "Peso Mexicano" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GDP", nombre: "Libra Esterlina" },
  ];

  // useMoneda
  const [moneda, SelectMoneda] = useMoneda("Elige tu Moneda", "", MONEDAS);

  // useCriptomoneda
  const [criptomoneda, SelectCripto] = useCriptomoneda(
    "Elige tu Criptomoneda",
    "",
    listacripto
  );

  // consulta de criptomonedas a la API
  useEffect(() => {
    const consutaAPI = async () => {
      // la url es de la pagina cryptoCompare api/Documentacion/toplists/toplist by market cap full date
      const URL =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      // Axios
      const respuesta = await axios.get(URL);

      guardarCriptomonedas(respuesta.data.Data);
      console.log(respuesta.data.Data);
    };
    // llamar a la funcion
    consutaAPI();

  }, []);

  // cotizar moneda 
  const cotizar = (event) => {
    // evitar que la pagina recarge 
    event.preventDefault();

    // validar la informacion y el relleno de los campos 
    if (moneda === '' || criptomoneda === ''){
        guardarError(true);
        return;
    }

    // llevamos los datos ingresados al componente padre
    guardarError(false);
    guardarMoneda(moneda);
    guardarcripto(criptomoneda);
  }


  return (
    <form onSubmit={cotizar}>
      {error ? <Error msm="Algo salio mal, eliga el tipo de moneda"/>: null}
      <SelectMoneda />
      <SelectCripto />

      <Boton type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
