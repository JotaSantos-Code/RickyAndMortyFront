import React from "react";
import { Header } from "../componentes/Header/Header";
import { Footer } from "../componentes/Footer/Footer";
import { Character } from "../componentes/Character/Character";
import { useState, useEffect } from "react";

export const Principal = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      const characterResponse = await fetch(
        "https://rickandmortyapi.com/api/character"
      );
      if (characterResponse.ok) {
        const charactersData = await characterResponse.json();
        setCharacter(charactersData.results);
      }
    }
    getCharacters();
  }, []);

  const renderCharacters = (character) => (
    <Character
      key={character.id}
      name={character.name}
      location={character.location}
      origin={character.origin}
      gender={character.gender}
      specie={character.species}
      status={character.status}
      image={character.image}
    ></Character>
  );

  return (
    <div>
      <Header />
      <ul className="character-list">{character.map(renderCharacters)}</ul>
      <Footer />
    </div>
  );
};
