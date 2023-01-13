import Header from "../components/header";
import { ChangeEvent, useState } from "react";
import { Container, Image, Div, Input, Button } from "../styles/loginStyles";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const router = useRouter();

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
    router.push("/homePage");
  };

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
