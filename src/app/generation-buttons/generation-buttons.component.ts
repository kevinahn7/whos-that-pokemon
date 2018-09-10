import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-generation-buttons',
  templateUrl: './generation-buttons.component.html',
  styleUrls: ['./generation-buttons.component.scss']
})
export class GenerationButtonsComponent implements OnInit {
  @Output() clickSender = new EventEmitter();

  getRandomNumber(generationNumber: number) {
    this.clickSender.emit(generationNumber)
  }

  constructor() { }

  ngOnInit() {
  }

}
