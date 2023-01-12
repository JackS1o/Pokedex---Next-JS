export interface PokeInterface {
  name: string;
  url: string;
  id: number;
  results: [];
  types: [];
  sprites: {
    front_default: string;
  };
}

export interface PokeDetailInterface {
  types: [{ type: { name: string }}];
  name: string;
}
