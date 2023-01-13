import axios from "axios";

export async function requestToApi() {
  const data = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/`)
    .then((res) => res.data)
    .catch((err) => err);
  return data;
}

export async function requestToApiWithParams(params: string) {
  const data = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${params}`)
    .then((res) => res.data)
    .catch((err) => err);
  return data;
}
