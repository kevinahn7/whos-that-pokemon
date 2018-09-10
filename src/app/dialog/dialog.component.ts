import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  numberOfRights: number;

  gyms = {
    3: "first",
    6: "second",
    9: "third",
    12: "fourth",
    15: "sixth",
    18: "seventh",
    21: "eigth"
  }

  elite = {
    26: "first",
    31: "second",
    36: "third",
    41: "fourth"
  }

  ngOnInit() {
    this.numberOfRights = this.data.numberOfRights;
  }

}


