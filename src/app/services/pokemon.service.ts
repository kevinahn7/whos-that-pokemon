import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PokemonService {

  constructor(private http: Http) { }

  getRandomPokemon(randomNumber: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
  }
}
