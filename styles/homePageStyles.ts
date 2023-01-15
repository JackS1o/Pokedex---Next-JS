import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  background-color: ${(props) => props.theme.background};
  border-right: 1px solid #e0e0e0;
  color: white;
  height: 100vh;
  div {
    width: 100%;
    justify-content: center;
    padding-left: 15px;
    div {
      p {
        cursor: pointer;
      }
    }
  }
  div::-webkit-scrollbar {
    width: 0.25rem;
  }
  div::-webkit-scrollbar-track {
    background: ${(props) => props.theme.pokeBackground};
  }
  div::-webkit-scrollbar-thumb {
    background: #000;
  }
`;

export const Logo = styled.img`
  height: 70px;
  margin: 10px;
`;

export const Hr = styled.hr`
  width: 80%;
  margin: 10px;
`;

export const P = styled.p`
  margin: 5px;
  height: 80px;
  font-size: 14px;
  text-align: center;
`;

export const InputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  margin-top: 4px;
  height: 50px;
`;

export const Input = styled.input`
  height: 25px;
  width: 80%;
  margin: 10px;
  border-radius: 20px;
  border: none;
  padding-left: 10px;
`;

export const RightContainer = styled.div`
  display: flex;
  width: 75%;
`;

export const PokemonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 110%;
`;

export const RightContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.background2};
  width: 100%;
  height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  margin-left: 100px;
  height: 115px;
  width: 90%;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 100px;
    }
  }
  div {
    display: flex;
    justify-content: space-evenly;
    padding-right: 2em;
  }
`;

export const AboutPokemon = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  img {
    height: 200px;
    background: ${(props) => props.theme.pokeBackground};
    width: 350px;
    border-radius: 10px;
    margin-left: 45px;
    margin-bottom: 15px;
  }
`;

export const PokeType = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.pokeBackground};
  height: 40px;
  width: 350px;
  border-radius: 5px;
  margin-left: 45px;
  margin-bottom: 15px;
  overflow-y: hidden;
  p {
    text-align: center;
    width: 80px;
    margin: 10px;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    padding: 2px;
    font-size: 12px;
  }
`;

export const PokeMeasurements = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 45px;
  margin-bottom: 15px;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    background-color: ${(props) => props.theme.pokeBackground};
    width: 170px;
    height: 35px;
    border-radius: 5px;
  }
`;

export const PokeAttributes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.pokeBackground};
  margin-left: 45px;
  margin-bottom: 10px;
  width: 350px;
  height: 120px;
  border-radius: 5px;
  padding: 10px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: center;
      border-radius: 5px;
      p {
        text-align: center;
        width: 80px;
        margin: 5px;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        padding: 2px;
        font-size: 12px;
      }
    }
  }
`;

export const PokeEvolutions = styled.div`
  display: flex;
  flex-direction: column;
  height: 110px;
  background-color: ${(props) => props.theme.pokeBackground};
  border-radius: 5px;
  margin-left: 60px;
  padding: 10px;
  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    overflow-y: hidden;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        height: 50px;
      }
      p {
        font-size: 12px;
      }
    }
  }
`;

export const NotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const DivPokeDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 900px;
  border-radius: 5px;
  div::-webkit-scrollbar {
    width: 0.25rem;
  }
  div::-webkit-scrollbar-track {
    background: ${(props) => props.theme.pokeBackground};
  }
  div::-webkit-scrollbar-thumb {
    background: #000;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.pokeBackground};
  margin-left: 60px;
  margin-bottom: 10px;
  height: 300px;
  border-radius: 5px;
  word-wrap: break-word;
  white-space: pre-wrap;
  p {
    font-size: 12px;
    padding: 10px;
  }
`;
