export interface PokeInterface {
  name: string;
  url: string;
  id: number;
  results: [];
  types: [];
  sprites: {
    front_default: string;
  };
  height: number;
  weight: number;
  stats: [];
}

export interface PokeDetailInterface {
  type: {
    name: string;
  };
  base_stat: number;
  stat: {
    name: string;
  }
}
