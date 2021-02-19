// Write your Character component here
import React, { useState } from 'react'
import styled from 'styled-components'

function Char (props) {
  const { data } = props  
    return (
    <Container className="container">
        <H2>{data.name}:</H2>
        <ParaCat>{"Birth Year: "}</ParaCat>
        <Para>{data.birth_year}</Para>
        <ParaCat>{"Gender: "}</ParaCat>
        <Para>{data.gender}</Para>
        <ParaCat>{"Mass: "}</ParaCat>
        <Para>{data.mass}</Para>
        <ParaCat>{"Height: "}</ParaCat>
        <Para>{data.height}</Para>
        {/* <img src={data.homeworld} alt="home planet"/> */}

    </Container>
    )
}

export default Char

const Container = styled.div`

`

const H2 = styled.h2`
font-size: 2rem;

&:hover{
    transform: scale(0.8);
    transition: all 0.5s ease-in-out;
}
transition: all 0.5s ease-in-out;
`
const Para = styled.p`
font-size: 1.5rem;
align-items: center;
margin-left: 3%;
color:gold;

&:hover{
    transform: scale(1.5);
    transition: all 0.3s ease-in-out;
}
transition: all 0.3s ease-in-out;
`
const ParaCat = styled.p`
font-size: 1.5rem;
margin-left: 6%;
font-weight: bold;

`