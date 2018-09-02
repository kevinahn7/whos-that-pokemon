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
  }

  currentPokemon: object;
  currentPokemonName: string;
  currentPokemonId: string
  selectedGeneration: number;
  randomNumber: number;
  madeCorrectGuess: boolean = false;
  madeIncorrectGuess: boolean = false;
  gaveUp: boolean = false;



  getRandomNumber(clickedGeneration: number) {
    this.currentPokemon = null;
    (<HTMLInputElement>document.getElementById("guessInput")).value = '';
    this.pokemonService.createRandomNumber(clickedGeneration).subscribe(data => {
      this.selectedGeneration = clickedGeneration;
      this.randomNumber = this.pokemonService.randomPokemonNumber;
      this.currentPokemon = data.json();
      this.currentPokemonName = data.json().name;
      this.currentPokemonId = (data.json().id).toString();
      console.log(this.currentPokemonName);
    })
    if (this.currentPokemon) {
      document.getElementById(this.currentPokemonId).classList.add("hidden");
    }
  }

  makeGuess(nameGuess: string) {
    if (this.currentPokemonName.toLowerCase() === nameGuess.toLowerCase()) {
      this.madeCorrectGuess = true;
      let pokemonElement = document.getElementById(this.currentPokemonId);
      pokemonElement.classList.remove("hidden");
      this.madeIncorrectGuess = false;
      (<HTMLInputElement> document.getElementById("guessButton")).disabled = true;
      (<HTMLInputElement>document.getElementById("guessInput")).disabled = true;
    } else {
      this.madeIncorrectGuess = true;
    }
  }
}


