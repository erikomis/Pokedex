import axios from "axios";

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  headers: {
    "content-type": "application/json",
  },
});

export async function paginatePokedex(offset: number = 0, limit: number = 10) {
  const { data } = await api.get(
    `/pokemon?offset=${offset == 1 ? 0 : (offset - 1) * limit}&limit=${limit}`
  );
  return data;
}

export async function pokemonItem(url: string) {
  const { data } = await axios.get(url);
  return data;
}
