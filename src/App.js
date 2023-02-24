import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import imagen from "./cryptomonedas.png";
import Formulario from "./components/Formulario";
import axios from "axios";
import Cotizacion from "./components/Cotizacion";
import Carga from "./components/Carga";

// componentes de styled
const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 8px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  //state de moneda
  const [moneda, guardarMoneda] = useState("");

  //state de criptomoneda
  const [criptomoneda, guardarcripto] = useState("");

  // resultados de la cotizacion
  const [resultado, guardarResultado] = useState({});

  // stado de la carga
  const [cargando, guardarCargando] = useState(false);

  //useeffect
  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      // validacion de los campos
      if (moneda === "") {
        return;
      }
      // segunda consulta de api para obtener los valores de la cotizacion
      const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

      const respuesta = await axios.get(URL);

      // mostrar evento de carga
      guardarCargando(true);

      // setTimeout ocultamos la craga para presentar los valores
      setTimeout(() => {
        // cambiar el estadod e guardarCargando
        guardarCargando(false);

        // mostrar valores
        guardarResultado(respuesta.data.DISPLAY[criptomoneda][moneda]);
      }, 3000);
    };
    cotizarCriptomoneda();
  }, [moneda, criptomoneda]);


  // forma de cargar y mostrar valores
  const Componete = (cargando) ? <Carga/> : <Cotizacion resultado={resultado} />


  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt="imagen cripto" />
      </div>
      <div>
        <Heading>Cotiza tu ciptomoneda Favorita al instante</Heading>
        <Formulario
          guardarMoneda={guardarMoneda}
          guardarcripto={guardarcripto}
        />
        {Componete}
        
      </div>
    </Contenedor>
  );
}

export default App;
