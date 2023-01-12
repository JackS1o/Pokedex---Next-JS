import { useEffect, useState } from "react";
import requestToApi from "./api/pokeApi";
import PokeInterface from "../interfaces/pokeInterface";

export default function HomePage() {
  const [data, setData] = useState("");

  useEffect(() => {
    requestToApi().then((res) => setData(res));
  }, []);

  const { results } = data;

  return (
    <div>
      <img
        src="https://cdn.riderize.com/miscellaneous/logo-pokedex.png"
        alt="logo"
      />
      <p>Everything you wanted to know about your favorite pocket monsters!</p>
      <input type="text" placeholder="Search by name or number" />
      <hr />
      <div>
        {results?.map((result: PokeInterface, index: number) => (
          <p key={index}>
            {`#${index + 1}`} -{" "}
            {result.name[0].toUpperCase() + result.name.slice(1)}
          </p>
        ))}
      </div>
    </div>
  );
}
