import { Component, OnInit } from '@angular/core';
import {availableListFile} from './../../../assets/availableList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  availableList = [];

  plannedMeal = [];
  selectedMeal = {};

  constructor() {
    this.plannedMeal = [];
    this.availableList = availableListFile;
  }

  ngOnInit(): void {
    this.selectedMeal = this.availableList[0];
  }

  receiveSelectedMeals(event) {
    console.log(event);
    this.plannedMeal = event;
  }
}
