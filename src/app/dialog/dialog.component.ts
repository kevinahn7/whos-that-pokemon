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
    3: {
      name: "Boulder",
      city: "Pewter",
      order: "first"
    },
    6: {
      name: "Cascade",
      city: "Cerulean",
      order: "second"
    },
    9: {
      name: "Thunder",
      city: "Vermillion",
      order: "third"
    },
    12: {
      name: "Rainbow",
      city: "Celadon",
      order: "fourth"
    },
    15: {
      name: "Soul",
      city: "Fuchsia",
      order: "fifth"
    },
    18: {
      name: "Marsh",
      city: "Saffron",
      order: "sixth"
    },
    21: {
      name: "Volcano",
      city: "Cinnabar",
      order: "seventh"
    }
    24: {
      name: "Earth",
      city: "Viridian",
      order: "eigth"
    }
  }

  elite = {
    29: {
      name: "Lorelei",
      order: "first"
    },
    34: {
      name: "Bruno",
      order: "second"
    },
    39: {
      name: "Agatha",
      order: "third"
    },
    44: {
      name: "Lance",
      order: "fourth"
    }
  }

  ngOnInit() {
    this.numberOfRights = this.data.numberOfRights;
  }

}
