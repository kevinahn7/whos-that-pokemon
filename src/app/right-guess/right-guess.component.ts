import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-right-guess',
  templateUrl: './right-guess.component.html',
  styleUrls: ['./right-guess.component.scss']
})
export class RightGuessComponent implements OnInit {
  @Output() clickSender = new EventEmitter();

  nextPokemon() {
    this.clickSender.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
