import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { generations } from '../models/generations.model';


@Injectable()
export class PokemonService {

  generationNumbers: object = generations;
  
  constructor(private http: Http) { }

  createRandomNumberAndPokemon(generationNumber: number) {
    let generationArray = this.generationNumbers[generationNumber];
    let first = generationArray[0];
    let second = generationArray[1];
    let randomNumber = Math.floor(Math.random() * (second - first) + 1) + first;
    let randomPokemonNumber = randomNumber;
    return this.createRandomPokemon(randomPokemonNumber);
  }

  createRandomPokemon(randomNumber: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`);
  }
}
