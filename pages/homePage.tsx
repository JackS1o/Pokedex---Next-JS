import { useEffect, useState } from "react";
import {
  requestToApi,
  requestToApiWithParams,
  requestPokemonEvolution,
} from "./api/pokeApi";
import {
  PokeInterface,
  PokeDetailInterface,
} from "../interfaces/pokeInterface";
import {
  MainContainer,
  LeftContainer,
  Logo,
  Hr,
  P,
  Input,
  RightContainer,
  PokemonContainer,
  RightContainerMain,
  Header,
  AboutPokemon,
  PokeType,
  PokeMeasurements,
  PokeAttributes,
  PokeEvolutions,
} from "../styles/homePageStyles";

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
    <MainContainer>
      <LeftContainer>
        <Logo
          src="https://cdn.riderize.com/miscellaneous/logo-pokedex.png"
          alt="logo"
        />
        <P>
          Everything you wanted to know about your favorite pocket monsters!
        </P>
        <Input type="text" placeholder="Search by name or number" />
        <Hr />
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
      </LeftContainer>
      <RightContainerMain>
        <Header>
          <h1>{`#${selectedPokemonData.id} - ${selectedPokemonData.name}`}</h1>
          <img src={selectedPokemonData.sprites?.front_default} alt="pokemon" />
        </Header>
        <RightContainer>
          <PokemonContainer>
            <AboutPokemon>
              <img
                src={selectedPokemonData.sprites?.front_default}
                alt="pokemon"
              />
              <PokeType>
                <strong>Type</strong>
                {selectedPokemonData.types?.map(
                  (pokeType: PokeDetailInterface, index: number) => (
                    <p key={index}>{pokeType.type.name}</p>
                  )
                )}
              </PokeType>
              <PokeMeasurements>
                <p>
                  <strong>Height:</strong>{" "}
                  {((selectedPokemonData.height / 10) * 3.281).toFixed(2)} f /{" "}
                  {(selectedPokemonData.height / 10).toFixed(1)} m
                </p>
                <p>
                  <strong>Weight:</strong>{" "}
                  {((selectedPokemonData.weight / 10) * 2.205).toFixed(1)}lbs /{" "}
                  {(selectedPokemonData.weight / 10).toFixed(1)}Kg
                </p>
              </PokeMeasurements>
              <PokeAttributes>
                <strong>Attributes</strong>
                <div>
                  <div>
                    {selectedPokemonData.stats?.map(
                      (pokeStat: PokeDetailInterface, index: number) => (
                        <p key={index}>
                          {pokeStat.base_stat}{" "}
                          {pokeStat.stat.name.slice(0, 3).toUpperCase()}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </PokeAttributes>
            </AboutPokemon>
          </PokemonContainer>
          <PokeEvolutions>
            <strong>Evolution</strong>
            {selectedPokemonEvolution?.chain?.evolves_to?.map(
              (evolution: PokeInterface, index: number) => (
                <div key={index}>
                  <p>{evolution.species.name}</p>
                  <p>{evolution.evolves_to[0]?.species.name}</p>
                </div>
              )
            )}
          </PokeEvolutions>
        </RightContainer>
      </RightContainerMain>
    </MainContainer>
  );
}
