import { useEffect, useState } from "react";
import { requestToApi, requestToApiWithParams, requestPokemonEvolution } from "./api/pokeApi";
import {
  PokeInterface,
  PokeDetailInterface,
} from "../interfaces/pokeInterface";

export default function HomePage() {
  const [data, setData] = useState({} as PokeInterface);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [selectedPokemonData, setSelectedPokemonData] = useState(
    {} as PokeInterface
  );
  const [selectedPokemonEvolution, setSelectedPokemonEvolution] = useState(
    {} as PokeInterface
  );

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
    requestPokemonEvolution(selectedPokemonData.id).then((res) =>
      setSelectedPokemonEvolution(res)
    );
  }, [selectedPokemon, selectedPokemonData.id]);

  const { results } = data;
  console.log(selectedPokemonEvolution);

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
          {selectedPokemonData.types?.map(
            (pokeType: PokeDetailInterface, index: number) => (
              <p key={index}>{pokeType.type.name}</p>
            )
          )}
        </div>
        <div>
          <p>Height: {selectedPokemonData.height}</p>
          <p>Weight: {selectedPokemonData.weight}</p>
        </div>
        <div>
          <p>Attributes</p>
          {selectedPokemonData.stats?.map(
            (pokeStat: PokeDetailInterface, index: number) => (
              <div key={index}>
                <p>{pokeStat.base_stat}</p>
                <p>{pokeStat.stat.name}</p>
              </div>
            )
          )}
        </div>
      </div>
      <div>
        <p>Evolution</p>
        <div>
          {selectedPokemonEvolution?.chain?.evolves_to?.map((evolution) => (
            <div>
              <p>{evolution.species.name}</p>
              <p>{evolution.evolves_to[0].species.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
