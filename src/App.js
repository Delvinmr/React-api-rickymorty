import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
import rickyMorty from './img/riki-motiy.png';
import './index.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
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

  //console.log(characters);
   

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Ricky & Morty</h1>
        {characters ? (
          <Characters characters={characters}  setCharacters={setCharacters} />
        ) : (
           <>
           <img src={rickyMorty} alt='ricky & morty' className='img-header' /><button onClick={reqApi} className='btn-search'>
              Buscar personajes
            </button>
            </>
        )}
       
      </header>
    </div>
  );
}

export default App;
