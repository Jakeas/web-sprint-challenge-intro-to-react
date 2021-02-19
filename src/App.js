import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Char from "./components/Character"
import './App.css';
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charData, setCharData] = useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(()=>{
    const fetchData = () => {
      axios
        .get('https://swapi.dev/api/people/')
        .then((res) => {
          console.log(res)
          setCharData(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    fetchData()
  },[])

  return (
    <div className="App">
      <H11 className="Header">Characters</H11>
      {
      charData.map((data, i) => {
        return <Char key={i} data={data} />
      })
      }
      
    </div>
  );
}

export default App;

const H11 = styled.h1`
&:hover{
    transform: scale(2);
    transition: all 0.8s ease-in-out;
}
transition: all 0.8s ease-in-out;
`