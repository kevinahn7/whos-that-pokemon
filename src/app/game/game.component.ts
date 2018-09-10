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
    1: "initial",
    2: "correctGuess",
    3: "incorrectGuess",
    4: "gaveUp"
  }

  dialogs = {
    3: "first",
    6: "second",
    9: "third",
    12: "fourth",
    15: "sixth",
    18: "seventh",
    21: "eigth",
    26: "elite one",
    31: "elite two",
    36: "elite three",
    41: "elite four and win"
  }

  currentGameState: string;
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
  numberOfRights: number = 0;
  theHint: string = "";
  
  getGifNumber() {
    this.gifNumber = Math.floor(Math.random() * 21) + 1;
  }

  getHint() {
    this.theHint = this.currentPokemonType;
  }

  toggleInputs(bool: boolean) {
    (<HTMLInputElement> document.getElementById("guessButton")).disabled = bool;
    (<HTMLInputElement>document.getElementById("guessInput")).disabled = bool;
  }

  resetGame() {
    this.numberOfWrongs = 0;
    this.currentGameState = this.gameStates[1];
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
      this.currentGameState = this.gameStates[2];
      this.showAnswerBool = true;
      this.numberOfRights++;
      document.getElementById(this.currentPokemonId).classList.remove("hidden");
      this.toggleInputs(true);
      if (this.dialogs[this.numberOfRights]) {
        this.openDialog();
      }
    } else {
      this.numberOfRights = 0;
      this.numberOfWrongs++;
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
    this.toggleInputs(true);
    this.currentGameState = this.gameStates[4];
  }

  gaveUpNext() {
    this.currentGameState = this.gameStates[1];
    this.getRandomNumber(this.selectedGeneration);
  }

  getPercentage() {
    return Math.trunc((this.numberOfRights/41)*100);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: {numberOfRights: this.numberOfRights}
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}