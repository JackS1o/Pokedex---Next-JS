export interface PokeInterface {
  response: {
    data: string;
  };
  data: string;
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
  chain: {};
  evolves_to: [{
    species: {
      name: string;
    },
    evolves_to: []
  }];
  species: {
    name: string;
  };
}

export interface PokeDetailInterface {
  type: {
    name: string;
  };
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface mock {
  about: string;
  name: string;
}
