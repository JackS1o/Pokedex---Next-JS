import Header from "../components/header";

export default function Login() {
  return (
    <>
      <Header />
      <div>
        <img src="../pokeball.svg" alt="pokeball" />
        <div>
          <input type="email" name="email" placeholder="email" />
          <button type="submit">Acessar</button>
        </div>
      </div>
    </>
  );
}
