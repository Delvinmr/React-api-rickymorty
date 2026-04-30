// pagina de datelles del personaje, se muestra un alert con la informacion del personaje seleccionado
import React from "react";
import { Link, useParams } from "react-router";
import rickyMorty from '../img/riki-motiy.png';
import '../index.css';
import '../App.css';
import Header from "../ui/header";
import Footer from "../ui/footer";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchCharacterDetail = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacterDetail();
  }, [id]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center px-4 py-10 gap-6">
        <Link to="/" className="btn-back self-start">
          ← Volver a la Home
        </Link>

        {loading ? (
          <p className="text-gray-400 text-lg">Cargando...</p>
        ) : character ? (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm w-full">
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 flex flex-col gap-3">
              <h1 className="text-2xl font-bold text-gray-800">{character.name}</h1>

              <p className={character.status === "Alive" ? "alive-status" : "dead-status"}>
                <span className={character.status === "Alive" ? "alive" : "dead"} />
                {character.status === "Alive" ? "Vivo" : "Muerto"}
              </p>

              <div className="text-sm text-gray-500 flex flex-col gap-1">
                <p>Especie: <span className="text-gray-700 font-medium">{character.species}</span></p>
                <p>Género: <span className="text-gray-700 font-medium">{character.gender}</span></p>
                <p>Origen: <span className="text-gray-700 font-medium">{character.origin?.name}</span></p>
                <p>Ubicación: <span className="text-gray-700 font-medium">{character.location?.name}</span></p>
                <p>Episodios: <span className="text-gray-700 font-medium">{character.episode?.length}</span></p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-red-400">No se encontró el personaje.</p>
        )}
      </main>

      <Footer />
    </div>
  );
}