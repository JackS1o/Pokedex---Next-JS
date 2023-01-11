import axios from "axios";

export default async function requestToApi() {
  const data = await axios
    .get("https://pokeapi.co/api/v2/pokemon/")
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return data;
}
