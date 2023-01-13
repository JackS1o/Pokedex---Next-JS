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

export const Logo = styled.img`
  height: 30px;
  margin: 10px;
`;

export const Hr = styled.hr`
  width: 80%;
  margin: 10px;
`;

export const P = styled.p`
  margin: 5px;
  height: 80px;
  font-size: 15px;
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
  background-color: #00b4ec;
  width: 75%;
`;

export const PokemonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const RightContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #00b4ec;
  width: 100%;
  height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  color: white;
  margin-left: 100px;
  height: 115px;
  width: 100%;
  img {
    height: 100px;
  }
`;

export const AboutPokemon = styled.div`
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

export const PokeType = styled.div`
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

export const PokeMeasurements = styled.div`
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

export const PokeAttributes = styled.div`
  display: flex;
  flex-direction: column;
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
        width: 80px;
        margin: 1px;
        background-color: #00b4ec;
        border-radius: 5px;
      }
    }
  }
`;

export const PokeEvolutions = styled.div`
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
