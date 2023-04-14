export interface Pokemon {
  id: number,
  name: string,
  type: number,
  isCool: boolean,
  acceptTerms: boolean,
}

export interface PokemonType{
  key: number,
  value: string
}
