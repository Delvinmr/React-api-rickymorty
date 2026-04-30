import { Link } from "react-router";
import "../index.css";
import CharacterDetail from "../pages/characters-ditail";
import Paginacion from "./paginacion";
import { useState, useEffect } from "react";
import Buscador from "./buscador";

export default function Characters(props) {
  //console.log(props);
  const { characters, setCharacters } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("");

  const volverHome = () => {
    console.log("resetear personajes");
    setCharacters(null);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  useEffect(() => {
    let url = `https://rickandmortyapi.com/api/character?page=${currentPage}`;

    if (query.trim() !== "") {
      url += `&name=${query}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setTotalPages(data.info.pages);
        //console.log("Página actual:", currentPage);
      });
  }, [currentPage]);

  return (
    <div className="characters">
      <div className="flex justify-center">
        <Buscador
          setCharacters={setCharacters}
          setTotalPages={setTotalPages}
          className="my-4 "
        />
      </div>

     
       <div className="flex flex-wrap items-center justify-center gap-8 pt-12">
  {characters.map((character, index) => (
    <div key={index} className="group w-56 h-80 [perspective:1000px] cursor-pointer">
      <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* Front */}
        <div className="absolute inset-0 rounded-2xl [backface-visibility:hidden] bg-white border border-gray-100 shadow-md overflow-hidden flex flex-col">
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-3 flex flex-col gap-1">
            <h3 className="font-semibold text-gray-800 text-base truncate">{character.name}</h3>
            <p className={character.status === "Alive" ? "alive-status" : "dead-status"}>
              <span className={character.status === "Alive" ? "alive" : "dead"} />
              {character.status === "Alive" ? "Vivo" : "Muerto"}
            </p>
            <p className="text-sm text-gray-500">
              Episodios: <span className="text-gray-700 font-medium">{character.episode.length}</span>
            </p>
            <p className="text-sm text-gray-500">
              Especie: <span className="text-gray-700 font-medium">{character.species}</span>
            </p>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 rounded-2xl [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-indigo-500 to-indigo-700 flex flex-col items-center justify-center gap-4 shadow-md">
          <img
            src={character.image}
            alt={character.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-white/50"
          />
          <p className="text-white font-semibold text-lg">{character.name}</p>
          <Link
            to={`/characters-ditail/${character.id}`}
            className="btn-details"
          >
            Ver Detalles
          </Link>
        </div>

      </div>
    </div>
  ))}
</div>
      <Paginacion
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
