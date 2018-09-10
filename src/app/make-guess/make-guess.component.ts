import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-make-guess',
  templateUrl: './make-guess.component.html',
  styleUrls: ['./make-guess.component.scss']
})
export class MakeGuessComponent implements OnInit {
  @Output() clickSender = new EventEmitter();

  makeGuess(guessValue: string) {
    this.clickSender.emit(guessValue);
  }

  constructor() { }

  ngOnInit() {
  }

}
