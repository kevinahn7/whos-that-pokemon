import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

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

  currentPokemon: object;
  currentPokemonName: string;
  currentPokemonId: string
  selectedGeneration: number;
  madeCorrectGuess: boolean = false;
  madeIncorrectGuess: boolean = false;
  gaveUp: boolean = false;
  gifNumber: number;
  showAnswerBool: boolean = false;
  theError: object;

  getGifNumber() {
    this.gifNumber = Math.floor(Math.random() * 21) + 1;
  }

  getRandomNumber(clickedGeneration: number) {
    this.getGifNumber();
    this.theError = null;
    this.currentPokemonId = "1";
    this.showAnswerBool = false;
    this.currentPokemon = null;
    this.madeCorrectGuess = false;
    this.madeIncorrectGuess = false;
    this.gaveUp = false;
    this.currentPokemonName = null;
    if (this.currentPokemonName) {
      (<HTMLInputElement>document.getElementById("guessInput")).value = '';
      (<HTMLInputElement> document.getElementById("guessButton")).disabled = false;
      (<HTMLInputElement>document.getElementById("guessInput")).disabled = false;
    }
    this.pokemonService.createRandomNumberAndPokemon(clickedGeneration).subscribe(data => {
      this.selectedGeneration = clickedGeneration;
      this.currentPokemon = data.json();
      this.currentPokemonName = data.json().name;
      this.currentPokemonId = (data.json().id).toString();
      console.log(this.currentPokemonName);
    },(err) => {
      console.log(err);
      this.theError = err;
    })
    if (this.currentPokemon) {
      document.getElementById(this.currentPokemonId).classList.add("hidden");
    }
  }

  makeGuess(nameGuess: string) {
    if (this.currentPokemonName.toLowerCase() === nameGuess.toLowerCase()) {
      this.madeCorrectGuess = true;
      this.madeIncorrectGuess = false;
      this.showAnswerBool = true;
      document.getElementById(this.currentPokemonId).classList.remove("hidden");
      (<HTMLInputElement> document.getElementById("guessButton")).disabled = true;
      (<HTMLInputElement>document.getElementById("guessInput")).disabled = true;
    } else {
      this.madeIncorrectGuess = true;
    }
  }

  nextPokemon() {
    this.getRandomNumber(this.selectedGeneration);
  }

  showAnswer() {
    this.showAnswerBool = true;
    document.getElementById(this.currentPokemonId).classList.remove("hidden");
    (<HTMLInputElement> document.getElementById("guessButton")).disabled = true;
    (<HTMLInputElement>document.getElementById("guessInput")).disabled = true;
    this.madeIncorrectGuess = false;
    this.gaveUp = true;
  }

  gaveUpNext() {
    this.getRandomNumber(this.selectedGeneration);
  }
}


