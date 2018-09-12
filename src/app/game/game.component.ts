import { Component, OnInit, NgModule } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { errorResponses } from '../models/errorResponses.models';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers: [PokemonService]
})

export class GameComponent implements OnInit {

  constructor(
    private pokemonService: PokemonService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getGifNumber();
  }

  gameStates = {
    "initial": 1,
    "correctGuess": 2,
    "incorrectGuess": 3,
    "gaveUp": 4
  }

  dialogs = {
    3: "first",
    6: "second",
    9: "third",
    12: "fourth",
    15: "fifth",
    18: "sixth",
    21: "seventh",
    24: "eight",
    29: "elite one",
    34: "elite two",
    39: "elite three",
    44: "elite four and win"
  }

  currentGameState: number;
  currentPokemon: object;
  currentPokemonName: string;
  currentPokemonId: string
  currentPokemonType: string;
  selectedGeneration: number;
  gifNumber: number;
  showAnswerBool: boolean = false;
  theError: object;
  errorMessage: string;
  numberOfWrongs: number = 0;
  numberOfRights: number = 39;
  theHint: string = "";

  getGifNumber() {
    this.gifNumber = Math.floor(Math.random() * 21) + 1;
  }

  getHint() {
    this.theHint = this.currentPokemonName[0].toUpperCase();
  }

  toggleInputs(bool: boolean) {
    (<HTMLInputElement> document.getElementById("guessButton")).disabled = bool;
    (<HTMLInputElement>document.getElementById("guessInput")).disabled = bool;
  }

  resetGame() {
    this.numberOfWrongs = 0;
    this.currentGameState = this.gameStates["initial"];
    this.getGifNumber();
    this.theError = null;
    this.currentPokemonId = "1";
    this.showAnswerBool = false;
    this.theHint = "";
    this.currentPokemon = null;
    this.currentPokemonName = null;
  }

  getRandomNumber(clickedGeneration: number) {
    this.resetGame();
    if (this.currentPokemon) {
      (<HTMLInputElement>document.getElementById("guessInput")).value = '';
      this.toggleInputs(false);
      document.getElementById(this.currentPokemonId).classList.add("hidden")
    }
    this.pokemonService.createRandomNumberAndPokemon(clickedGeneration).subscribe(data => {
      this.selectedGeneration = clickedGeneration;
      this.currentPokemon = data.json();
      this.currentPokemonName = data.json().name;
      this.currentPokemonId = (data.json().id).toString();
      this.currentPokemonType = (data.json().types[0].type.name)
      console.log(this.currentPokemonName);
    },(err) => {
      this.theError = err;
      this.errorMessage = errorResponses[err.status];
    })
  }

  makeGuess(nameGuess: string) {
    if (this.currentPokemonName.toLowerCase() === nameGuess.toLowerCase()) {
      this.currentGameState = this.gameStates["correctGuess"];
      this.showAnswerBool = true;
      this.numberOfRights+=5;
      document.getElementById(this.currentPokemonId).classList.remove("hidden");
      this.toggleInputs(true);
      if (this.dialogs[this.numberOfRights]) this.openDialog();
    } else {
      this.numberOfRights = 0;
      this.numberOfWrongs++;
      this.currentGameState = this.gameStates["incorrectGuess"];
    }
  }

  nextPokemon() {
    this.currentGameState = this.gameStates["initial"];
    this.getRandomNumber(this.selectedGeneration);
  }

  showAnswer() {
    this.showAnswerBool = true;
    document.getElementById(this.currentPokemonId).classList.remove("hidden");
    this.toggleInputs(true);
    this.currentGameState = this.gameStates["gaveUp"];
  }

  gaveUpNext() {
    this.currentGameState = this.gameStates["initial"];
    this.getRandomNumber(this.selectedGeneration);
  }

  getPercentage() {
    return Math.trunc((this.numberOfRights/44)*100);
  }

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '400px',
      data: {numberOfRights: this.numberOfRights}
    });
  }
}
