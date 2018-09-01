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

  selectedGeneration: number;

  getRandomNumber(clickedGeneration: number) {
    this.pokemonService.randomNumber(clickedGeneration);
  }
}
