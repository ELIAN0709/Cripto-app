import React from 'react';
import styled from '@emotion/styled';

const MsmErro = styled.p`
    background-color: #b7322c;
    padding: 1rem;
    color: #b0b0b0;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
`;


const Error = ({msm}) => {
    return ( 
        <MsmErro>{msm}</MsmErro>
    );
}
 
export default Error;