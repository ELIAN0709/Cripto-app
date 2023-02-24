import React from 'react'
import styled from '@emotion/styled'

const Resultado = styled.div`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
`;

const Parrafo = styled.p`
    font-size: 20px;

    span{
        font-weight: bold;
    }

`;

const Precio = styled.p`
    font-size: 30px;
    span{
        font-weight: bold;
    }
`;

const Cotizacion = ({resultado}) => {
    if (Object.keys(resultado).length === 0) {
        return null;
    }
    //console.log(resultado)
    return ( 
        <Resultado>
            <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>
            <Parrafo>El precio mas alto del dia: <span>{resultado.HIGHDAY}</span></Parrafo>
            <Parrafo>El precio mas bajo del dia: <span>{resultado.LOWDAY}</span></Parrafo>
            <Parrafo>La variacion ultimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span></Parrafo>
            <Parrafo>Ultima actualizacion: <span>{resultado.LASTUPDATE}</span></Parrafo>
        </Resultado>
    );
}
 
export default Cotizacion;