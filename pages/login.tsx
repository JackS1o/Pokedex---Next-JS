import Header from "../components/header";
import { ChangeEvent, useContext, useState } from "react";
import { Container, Image, Div, Input, Button } from "../styles/loginStyles";
import { useRouter } from "next/router";
import { MyContext } from "../context/context";

const dark = {
  background: "#444654",
};

const light = {
  background: "#fff",
};

export default function Login() {
  const { theme } = useContext(MyContext) as any;
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
      <Container theme={theme ? dark : light}>
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
