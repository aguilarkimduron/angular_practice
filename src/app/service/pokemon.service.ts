import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon';
import { Observable } from 'rxjs';

const POKEMON_API_URL = "http://localhost:3000/pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

constructor(readonly http: HttpClient) { }

getPokemon(id: number): Observable<Pokemon>{
  return this.http.get<Pokemon>(`${POKEMON_API_URL}/${id}`);
}

getPokemons(): Observable<Pokemon[]>{
  return this.http.get<Pokemon[]>(POKEMON_API_URL);
}

}
