import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
  providers: [PokemonService]
})
export class DisplayComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
  }

  currentPokemon: object;

  playGame() {
    console.log(this.pokemonService.randomPokemonNumber);
    // pokemonservice randompokemon number is not working
    // this.pokemonService.createRandomPokemon(this.pokemonService.randomPokemonNumber).subscribe(pokemon => {
    //   this.currentPokemon = pokemon.json();
    // })
  }
}
