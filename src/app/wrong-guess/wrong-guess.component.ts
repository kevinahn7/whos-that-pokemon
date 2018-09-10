import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wrong-guess',
  templateUrl: './wrong-guess.component.html',
  styleUrls: ['./wrong-guess.component.scss']
})
export class WrongGuessComponent implements OnInit {
  @Input() numberOfWrongs: number;
  @Output() clickSender = new EventEmitter();

  showAnswer() {
    this.clickSender.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
