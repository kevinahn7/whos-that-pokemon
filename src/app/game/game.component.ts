import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { errorResponses } from '../models/errorResponses.models';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers: [PokemonService]
})
export class GameComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getGifNumber();
  }

  gameStates = {
    1: "initial",
    2: "correctGuess",
    3: "incorrectGuess",
    4: "gaveUp"
  }

  currentGameState: string;
  currentPokemon: object;
  currentPokemonName: string;
  currentPokemonId: string
  selectedGeneration: number;
  gifNumber: number;
  showAnswerBool: boolean = false;
  theError: object;
  errorMessage: string;

  getGifNumber() {
    this.gifNumber = Math.floor(Math.random() * 21) + 1;
  }

  getRandomNumber(clickedGeneration: number) {
    this.currentGameState = this.gameStates[1];
    this.getGifNumber();
    this.theError = null;
    this.currentPokemonId = "1";
    this.showAnswerBool = false;
    this.currentPokemon = null;
    this.currentPokemonName = null;
    if (this.currentPokemon) {
      (<HTMLInputElement>document.getElementById("guessInput")).value = '';
      (<HTMLInputElement> document.getElementById("guessButton")).disabled = false;
      (<HTMLInputElement>document.getElementById("guessInput")).disabled = false;
      document.getElementById(this.currentPokemonId).classList.add("hidden")
    }
    this.pokemonService.createRandomNumberAndPokemon(clickedGeneration).subscribe(data => {
      this.selectedGeneration = clickedGeneration;
      this.currentPokemon = data.json();
      this.currentPokemonName = data.json().name;
      this.currentPokemonId = (data.json().id).toString();
      console.log(this.currentPokemonName);
    },(err) => {
      this.theError = err;
      this.errorMessage = errorResponses[err.status];
    })
  }

  makeGuess(nameGuess: string) {
    if (this.currentPokemonName.toLowerCase() === nameGuess.toLowerCase()) {
      this.currentGameState = this.gameStates[2];
      this.showAnswerBool = true;
      document.getElementById(this.currentPokemonId).classList.remove("hidden");
      (<HTMLInputElement> document.getElementById("guessButton")).disabled = true;
      (<HTMLInputElement>document.getElementById("guessInput")).disabled = true;
    } else {
      this.currentGameState = this.gameStates[3];
    }
  }

  nextPokemon() {
    this.currentGameState = this.gameStates[1];
    this.getRandomNumber(this.selectedGeneration);
  }

  showAnswer() {
    this.showAnswerBool = true;
    document.getElementById(this.currentPokemonId).classList.remove("hidden");
    (<HTMLInputElement> document.getElementById("guessButton")).disabled = true;
    (<HTMLInputElement>document.getElementById("guessInput")).disabled = true;
    this.currentGameState = this.gameStates[4];
  }

  gaveUpNext() {
    this.currentGameState = this.gameStates[1];
    this.getRandomNumber(this.selectedGeneration);
  }
}