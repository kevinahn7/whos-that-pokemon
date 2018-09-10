import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-streak',
  templateUrl: './streak.component.html',
  styleUrls: ['./streak.component.scss']
})
export class StreakComponent implements OnInit {
  @Input() numberOfRights: number;
  
  constructor() { }

  ngOnInit() {
  }

}
