import {
  ChangeEvent,
  MouseEvent,
  useContext,
  useEffect,
  useState,
} from "react";
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
import { optionTheme } from "../styles/headerStyles";
import { MyContext } from "../context/context";
import {
  attributesColor,
  typeColor,
  font,
  dark,
  light,
} from "../utils/darkModeColors";

export default function HomePage() {
  const [data, setData] = useState({} as PokeInterface);
  const [selectedPokemon, setSelectedPokemon] = useState<string>("");
  const [selectedPokemonData, setSelectedPokemonData] = useState(
    {} as PokeInterface
  );
  const [pokeName, setPokeName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { theme, setTheme } = useContext(MyContext) as any;

  useEffect(() => {
    requestToApi().then((res: any) => setData(res));
    requestToApiWithParams(selectedPokemon).then((res) =>
      setSelectedPokemonData(res)
    );
    setLoading(true);
    setTimeout(() => {
      if (!selectedPokemon) {
        requestToApiWithParams("bulbasaur").then((res: any) =>
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
      await requestToApiWithParams(pokeNameLower).then((res: any) => {
        setSelectedPokemonData(res);
      });
      setLoading(false);
    }, 500);
    setPokeName("");
  };

  const pokeEvolution = pokeMock.filter((poke: mock) => {
    const { id } = poke;
    const evolutions = id.find(
      (pokeId: number) => pokeId === selectedPokemonData.id
    );
    return evolutions;
  });

  const pokeEvolutionName = pokeEvolution.filter(
    (poke: mock) => poke.name.toLowerCase() !== selectedPokemonData.name
  );

  const pokeDescription = pokeMock.filter(
    (poke: mock) => poke.name.toLowerCase() === selectedPokemonData.name
  );

  return (
    <MainContainer>
      <LeftContainer theme={theme ? dark : light}>
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
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPokeName(e.target.value)
            }
          />
          <AiOutlineSearch
            style={{ cursor: "pointer" }}
            onMouseOver={(e: MouseEvent<SVGElement>) =>
              (e.currentTarget.style.color = "#000")
            }
            onMouseOut={(e: MouseEvent<SVGElement>) =>
              (e.currentTarget.style.color = "#fff")
            }
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
      <RightContainerMain theme={theme ? dark : light}>
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
                        <FiSun style={{ fontSize: "25px" }} />
                        <MdOutlineToggleOff
                          onClick={() => setTheme(!theme)}
                          style={
                            theme
                              ? optionTheme.dark
                              : {
                                  width: "50px",
                                  fontSize: "40px",
                                  color: "white",
                                }
                          }
                        />
                        <BsMoon style={{ fontSize: "20px" }} />
                      </div>
                    </Header>
                    <RightContainer>
                      <PokemonContainer>
                        <AboutPokemon theme={theme ? dark : light}>
                          <img
                            src={selectedPokemonData.sprites?.front_default}
                            alt="pokemon"
                          />
                          <PokeType theme={theme ? dark : light}>
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
                          <PokeMeasurements theme={theme ? dark : light}>
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
                          <PokeAttributes theme={theme ? dark : light}>
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
                        <PokeEvolutions theme={theme ? dark : light}>
                          <strong>Evolution</strong>
                          <div>
                            {pokeEvolutionName.map(
                              (
                                evolution: { name: string; url: string },
                                index: number
                              ) => (
                                <div key={index}>
                                  <img src={evolution.url} alt="" />
                                  <strong>{evolution.name}</strong>
                                </div>
                              )
                            )}
                          </div>
                        </PokeEvolutions>
                        <Description theme={theme ? dark : light}>
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
