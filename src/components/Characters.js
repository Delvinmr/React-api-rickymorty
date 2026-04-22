import '../index.css';

export default function Characters(props) {
    //console.log(props);
    const { characters, setCharacters } = props;
    const volverHome = () => {
       
         console.log("resetear personajes");
         setCharacters(null);
    }


    return (
        <div className="characters">
            <h1>Personajes</h1>
           <span className="back-home" onClick={volverHome}>volver a la home</span>

           <div className="characters-container">
            {characters.map((character, index) => (
              <div key={index} className="character-card">
                <div className="character-image">
                  <img src={character.image} alt={character.name} />
                </div>
                <div>
                  <h3>{character.name}</h3>
                  <h6>{character.status === "Alive" ? (
                        <p className="alive-status">
                        <span className="alive"></span>Vivo

                        </p>
                        ) : (
                        <p className="dead-status">
                        <span className="dead"></span>Muerto
                        </p>
                    )}
                    </h6>
                   <p>
                    <span className="text-gray">Espisodios:</span>
                    <span >{character.episode.length}</span>
                   </p>
                     <p>
                    <span className="text-gray">Especie:</span>
                    <span >{character.species}</span>
                    </p>
                </div>

                {/* <button className="btn-details" >Ver Detalles</button> */}
              </div>
            ))}
           </div>
          

          
            {/* <div className="pagination">
                <button className="btn-pagination">Anterior</button>
                
                <button className="btn-pagination">Siguiente</button>
            </div> */}

        </div>
        
    );
}