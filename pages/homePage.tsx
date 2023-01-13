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
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  background-color: #dd4b4a;
  border-right: 1px solid #e0e0e0;
  color: white;
  height: 100vh;
  div {
    width: 100%;
    justify-content: center;
    padding-left: 15px;
  }
  div::-webkit-scrollbar {
    width: 0.25rem;
  }
  div::-webkit-scrollbar-track {
    background: #fff;
  }
  div::-webkit-scrollbar-thumb {
    background: #000;
  }
`;

const Logo = styled.img`
  height: 30px;
  margin: 10px;
`;

const Hr = styled.hr`
  width: 80%;
  margin: 10px;
`;

const P = styled.p`
  margin: 10px;
`;

const Input = styled.input`
  height: 30px;
  width: 80%;
  margin: 10px;
  border-radius: 20px;
  border: none;
  padding-left: 10px;
`;

const RightContainer = styled.div`
  display: flex;
  background-color: #00b4ec;
  width: 75%;
`;

const PokemonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const RightContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #00b4ec;
  width: 100%;
  height: 100vh;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  color: white;
  margin-left: 100px;
  height: 100px;
  width: 100%;
  img {
    height: 100px;
  }
`;

const AboutPokemon = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  img {
    height: 250px;
    background: white;
    width: 350px;
    border-radius: 5%;
    margin-left: 45px;
    margin-bottom: 10px;
  }
`;

const PokeType = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff;
  height: 30px;
  width: 350px;
  border-radius: 5px;
  margin-left: 45px;
  margin-bottom: 10px;
`;

const PokeMeasurements = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff;
  margin-left: 45px;
  margin-bottom: 10px;
  width: 350px;
  height: 30px;
  border-radius: 5px;
`;

const PokeAttributes = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #fff;
  margin-left: 45px;
  margin-bottom: 10px;
  width: 350px;
  height: 100px;
  border-radius: 5px;
  padding: 10px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      margin: 10px;
      border-radius: 5px;
      p {
        text-align: center;
        width: 100px;
        margin: 1px;
        background-color: #00b4ec;
        border-radius: 5px;
      }
    }
  }
`;

const PokeEvolutions = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100px;
  width: 700px;
  background-color: #fff;
  border-radius: 5px;
  margin-left: 60px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

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
