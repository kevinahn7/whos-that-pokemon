import {  Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.scss']
})
export class HintComponent implements OnInit {
  @Input() currentPokemonId: number;
  @Input() theHint: string;
  @Output() clickSender = new EventEmitter();

  getHint() {
    this.clickSender.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
