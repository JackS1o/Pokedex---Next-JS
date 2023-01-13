import { useEffect, useState } from "react";
import { requestToApi, requestToApiWithParams } from "./api/pokeApi";
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
import { BsMoon } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { MdOutlineToggleOff } from "react-icons/md";
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

const font = {
  fontWeight: "700",
  cursor: "pointer",
  textDecoration: "underline",
};

export default function HomePage() {
  const [data, setData] = useState({} as PokeInterface);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [selectedPokemonData, setSelectedPokemonData] = useState(
    {} as PokeInterface
  );
  const [pokeName, setPokeName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    requestToApi().then((res) => setData(res));
    requestToApiWithParams(selectedPokemon).then((res) =>
      setSelectedPokemonData(res)
    );
    setLoading(true);
    setTimeout(() => {
      if (!selectedPokemon) {
        requestToApiWithParams("bulbasaur").then((res) =>
          setSelectedPokemonData(res)
        );
      }
    }, 700);
    setLoading(false);
  }, [selectedPokemon]);

  const handleSearch = async () => {
    const pokeNameLower = pokeName.toLowerCase();
    setLoading(true);
    setTimeout(async () => {
      await requestToApiWithParams(pokeNameLower).then((res) => {
        setSelectedPokemonData(res);
      });
      setLoading(false);
    }, 500);
    setPokeName("");
  };

  const pokeEvolution = pokeMock.filter((poke) => {
    const { id } = poke;
    const evolutions = id.find((pokeId) => pokeId === selectedPokemonData.id);
    return evolutions;
  });

  const pokeEvolutionName = pokeEvolution.filter(
    (poke) => poke.name !== selectedPokemonData.name
  );

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
            onMouseOver={(e) => (e.currentTarget.style.color = "#000")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
            onClick={handleSearch}
          />
        </InputDiv>
        <Hr />
        <div>
          {data?.results?.map((result: PokeInterface, index: number) => {
            return (
              <div key={index}>
                <p
                  onClick={() => setSelectedPokemon(result.name)}
                  style={result.name === selectedPokemon ? font : {}}
                >
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
                      <div>
                        <h1>{`#${selectedPokemonData?.id} - ${
                          selectedPokemonData.name[0].toUpperCase() +
                          selectedPokemonData.name.slice(1)
                        }`}</h1>
                        <img
                          src={selectedPokemonData.sprites?.front_default}
                          alt="pokemon"
                        />
                      </div>
                      <div>
                        <BsMoon style={{ fontSize: "25px" }} />
                        <MdOutlineToggleOff style={{ width: "50px", fontSize: "40px" }} />
                        <FiSun style={{ fontSize: "25px" }} />
                      </div>
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
                          <div>
                            {pokeEvolutionName.map(
                              (
                                evolution: { name: string; url: string },
                                index: number
                              ) => (
                                <div key={index}>
                                  <img src={evolution.url} alt="" />
                                  <p>{evolution.name}</p>
                                </div>
                              )
                            )}
                          </div>
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
