import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.scss'],
  providers: [PokemonService]
})
export class GenerationsComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
  }
  thePokemon: object;
  selectedGeneration: number;

  getRandomNumber(clickedGeneration: number) {

    this.pokemonService.createRandomNumber(clickedGeneration).subscribe(data => {
      console.log("pokemon from generations " + data.json().name);
      console.log(this.pokemonService.randomPokemonNumber);
      //take out the subscribing part once the program works
    })
  }
}