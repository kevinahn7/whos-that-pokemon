import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { generations } from '../models/generations.model';


@Injectable()
export class PokemonService {

  generationNumbers: object = generations;
  
  constructor(private http: Http) { }

  randomPokemonNumber: number;

  createRandomNumber(generationNumber: number) {
    let generationArray = this.generationNumbers[generationNumber];
    let first = generationArray[0];
    let second = generationArray[1];
    let randomNumber = Math.floor(Math.random() * (second - first) + 1) + first;
    this.randomPokemonNumber = randomNumber;
    return this.createRandomPokemon(this.randomPokemonNumber);
  }

  createRandomPokemon(randomNumber: number) {
    console.log(randomNumber)
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
  }
}
