import { useEffect, useState } from "react";
import {
  requestToApi,
  requestToApiWithParams,
  requestPokemonEvolution,
} from "./api/pokeApi";
import {
  PokeInterface,
  PokeDetailInterface,
  mock,
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
  InputDiv,
  NotFound,
  Description,
  DivPokeDetails,
} from "../styles/homePageStyles";
import { AiOutlineSearch } from "react-icons/ai";
import Loading from "../components/loading";
import { pokeMock } from "../mocks/pokeMocks";

const attributesColor = [
  "#ff5958",
  "#ff9a58",
  "#ffca00",
  "#156dea",
  "#4cc752",
  "#ff76a2",
];

const typeColor = ["#33c942", "#ba3ea5"];

export default function HomePage() {
  const [data, setData] = useState({} as PokeInterface);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [selectedPokemonData, setSelectedPokemonData] = useState(
    {} as PokeInterface
  );
  const [selectedPokemonEvolution, setSelectedPokemonEvolution] = useState(
    {} as PokeInterface
  );
  const [pokeName, setPokeName] = useState("");
  const [loading, setLoading] = useState(false);

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
    requestPokemonEvolution(selectedPokemonData?.id).then((res) =>
      setSelectedPokemonEvolution(res)
    );
  }, [selectedPokemon, selectedPokemonData?.id]);

  const handleSearch = async () => {
    setLoading(true);
    await requestToApiWithParams(pokeName).then((res) => {
      setSelectedPokemon(res);
      setLoading(false);
    });
  };

  const pokeDescription = pokeMock.filter(
    (poke) => poke.name === selectedPokemonData.name
  );

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
        <InputDiv>
          <Input
            type="text"
            placeholder="Search by name or number"
            value={pokeName}
            onChange={(e) => setPokeName(e.target.value)}
          />
          <AiOutlineSearch
            style={{ cursor: "pointer" }}
            onClick={handleSearch}
          />
        </InputDiv>
        <Hr />
        <div>
          {data?.results?.map((result: PokeInterface, index: number) => {
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
        {loading ? (
          <Loading />
        ) : (
          <>
            {selectedPokemonData.response?.data === "Not Found" ? (
              <NotFound>
                <h1>Pokemon not found or incorrect name!</h1>
              </NotFound>
            ) : (
              <>
                {selectedPokemonData.id === undefined ? (
                  <Loading />
                ) : (
                  <>
                    <Header>
                      <h1>{`#${selectedPokemonData?.id} - ${selectedPokemonData.name}`}</h1>
                      <img
                        src={selectedPokemonData.sprites?.front_default}
                        alt="pokemon"
                      />
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
                              (
                                pokeType: PokeDetailInterface,
                                index: number
                              ) => (
                                <p
                                  key={index}
                                  style={{ backgroundColor: typeColor[index] }}
                                >
                                  {pokeType.type.name.toUpperCase()}
                                </p>
                              )
                            )}
                          </PokeType>
                          <PokeMeasurements>
                            <p>
                              <strong>Height:</strong>
                              {(
                                (selectedPokemonData.height / 10) *
                                3.281
                              ).toFixed(2)}{" "}
                              f / {(selectedPokemonData.height / 10).toFixed(1)}{" "}
                              m
                            </p>
                            <p>
                              <strong>Weight:</strong>
                              {(
                                (selectedPokemonData.weight / 10) *
                                2.205
                              ).toFixed(1)}
                              lbs /{" "}
                              {(selectedPokemonData.weight / 10).toFixed(1)}Kg
                            </p>
                          </PokeMeasurements>
                          <PokeAttributes>
                            <strong>Attributes</strong>
                            <div>
                              <div>
                                {selectedPokemonData.stats?.map(
                                  (
                                    pokeStat: PokeDetailInterface,
                                    index: number
                                  ) => (
                                    <p
                                      key={index}
                                      style={{
                                        backgroundColor: attributesColor[index],
                                      }}
                                    >
                                      {pokeStat.base_stat}{" "}
                                      {pokeStat.stat.name
                                        .slice(0, 3)
                                        .toUpperCase()}
                                    </p>
                                  )
                                )}
                              </div>
                            </div>
                          </PokeAttributes>
                        </AboutPokemon>
                      </PokemonContainer>
                      <DivPokeDetails>
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
                        <Description>
                          {pokeDescription.map(
                            (pokemon: mock, index: number) => (
                              <p key={index}>{pokemon.about}</p>
                            )
                          )}
                        </Description>
                      </DivPokeDetails>
                    </RightContainer>
                  </>
                )}
              </>
            )}
          </>
        )}
      </RightContainerMain>
    </MainContainer>
  );
}
