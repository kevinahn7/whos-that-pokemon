import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { generations } from '../models/generations.model';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";


@Injectable()
export class PokemonService {

  generationNumbers: object = generations;
  
  constructor(private http: Http) { }

  createRandomNumberAndPokemon(generationNumber: number) {
    let generationArray = this.generationNumbers[generationNumber];
    let first = generationArray[0];
    let second = generationArray[1];
    let randomNumber = Math.floor(Math.random() * (second - first) + 1) + first;
    return this.createRandomPokemon(randomNumber);
  }

  createRandomPokemon(randomNumber: number) {
    return this.http.get(`http://aspnetplayground20180909102606.azurewebsites.net/home/pokemon/${randomNumber}/`)
    .catch((error) => {
      return Observable.throw(error);
    });
  }
}
