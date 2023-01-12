import Header from "../components/header";
import styled from "styled-components";
import { ChangeEvent, useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const Image = styled.img`
  height: 100px;
  width: 100px;
  margin-bottom: 30px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  height: 40px;
  width: 300px;
  margin-bottom: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  height: 30px;
  width: 300px;
  background-color: #1555d1;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0d3b9a;
    transition: 0.1s;
    transform: scaleY(1.1);
  }
  font-weight: bold;
`;

export default function Login() {
  const [email, setEmail] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
  };

  const login = () => {
    const verifyEmail = /\S+@\S+\.\S+/;
    const result = verifyEmail.test(email);
    if (!result || email === "" || email.length < 5) {
      return alert("Digite um e-mail válido!");
    }
    window.location.href = "/homePage";
  }
  
  return (
    <>
      <Header />
      <Container>
        <Image src="../pokeball.svg" alt="pokeball" />
        <Div>
          <Input
            type="email"
            value={email}
            placeholder="Seu melhor e-mail"
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              handleChange(e)
            }
          />
          <Button type="button" onClick={login}>
            Acessar
          </Button>
        </Div>
      </Container>
    </>
  );
}
