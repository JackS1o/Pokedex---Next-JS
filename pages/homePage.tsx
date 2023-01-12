import { useEffect, useState } from "react";
import { requestToApi, requestToApiWithParams } from "./api/pokeApi";
import { PokeInterface, PokeDetailInterface } from "../interfaces/pokeInterface";

export default function HomePage() {
  const [data, setData] = useState({} as PokeInterface);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [selectedPokemonData, setSelectedPokemonData] = useState({} as PokeInterface);

  useEffect(() => {
    requestToApi().then((res) => setData(res));
    requestToApiWithParams(selectedPokemon).then((res) =>
      setSelectedPokemonData(res)
    );
    if (!selectedPokemon) {
      requestToApiWithParams("bulbasaur").then((res) =>
        setSelectedPokemonData(res)
      );
    }
  }, [selectedPokemon]);

  const { results } = data;
  console.log(results);

  return (
    <div>
      <div>
        <img
          src="https://cdn.riderize.com/miscellaneous/logo-pokedex.png"
          alt="logo"
        />
        <p>
          Everything you wanted to know about your favorite pocket monsters!
        </p>
        <input type="text" placeholder="Search by name or number" />
        <hr />
        <div>
          {results?.map((result: PokeInterface, index: number) => {
            return (
              <div key={index}>
                <p onClick={() => setSelectedPokemon(result.name)}>
                  {`#${index + 1}`} -{" "}
                  {result.name[0].toUpperCase() + result.name.slice(1)}
                </p>
                <img src={result.url} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h1>{`#${selectedPokemonData.id}`}</h1>
        <h1>{selectedPokemonData.name}</h1>
        <img src={selectedPokemonData.sprites?.front_default} alt="pokemon" />
      </div>
      <div>
        <img src={selectedPokemonData.sprites?.front_default} alt="pokemon" />
        <div>
          <p>Type</p>
          {selectedPokemonData.types?.map((type: PokeDetailInterface, index: number) => (
            <p key={index}>{type.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
