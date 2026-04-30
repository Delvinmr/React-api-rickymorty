 
import React from 'react';
import '../index.css';

import { useState, useEffect } from 'react';
import Characters from '../components/Characters';
import { Link, Router } from 'react-router';



function Main(){

   const [characters, setCharacters] = useState(null);

 const reqApi = async () => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    //console.log(response);
    const data = await response.json();
   // console.log(data);
    setCharacters(data.results);

  } catch (error) {
    console.error('Error:', error);
  }



 };

  useEffect(() => {
    reqApi();
    
  }, []);

    return (
        <div>

         {characters &&(
          <Characters characters={characters}  setCharacters={setCharacters} />
       
        )}
         

        </div>
    )
}

export default Main;