import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  availableList = [
    {
      type: 'Pre-Workout',
      options: [
        { food: 'Banana', calories: 300 },
        { food: 'Badam', calories: 300 },
        { food: 'Dates', calories: 300 },
        { food: 'BCAA', calories: 300 },
        { food: 'Walnuts', calories: 300 },
        { food: 'Raisins', calories: 300 },
      ],
    },
    {
      type: 'Post-Workout',
      options: [
        { food: 'Banana', calories: 300 },
        { food: 'Badam', calories: 300 },
        { food: 'Dates', calories: 300 },
        { food: 'BCAA', calories: 300 },
        { food: 'Walnuts', calories: 300 },
        { food: 'Raisins', calories: 300 },
        { food: 'Oats', calories: 300 },
        { food: 'Milk', calories: 300 },
      ],
    },
    {
      type: 'Meal 3',
      options: [
        { food: 'Banana', calories: 300 },
        { food: 'Badam', calories: 300 },
        { food: 'Dates', calories: 300 },
        { food: 'BCAA', calories: 300 },
        { food: 'Walnuts', calories: 300 },
        { food: 'Raisins', calories: 300 },
        { food: 'Oats', calories: 300 },
        { food: 'Milk', calories: 300 },
      ],
    },
    {
      type: 'Meal 4',
      options: [
        { food: 'Banana', calories: 300 },
        { food: 'Badam', calories: 300 },
        { food: 'Dates', calories: 300 },
        { food: 'BCAA', calories: 300 },
        { food: 'Walnuts', calories: 300 },
        { food: 'Raisins', calories: 300 },
        { food: 'Oats', calories: 300 },
        { food: 'Milk', calories: 300 },
      ],
    },
    {
      type: 'Meal 5',
      options: [
        { food: 'Banana', calories: 300 },
        { food: 'Badam', calories: 300 },
        { food: 'Dates', calories: 300 },
        { food: 'BCAA', calories: 300 },
      ],
    },
  ];

  plannedMeal = [];
  selectedMeal = {};

  constructor() {
    this.plannedMeal = [];
  }

  ngOnInit(): void {
    this.selectedMeal = this.availableList[0];
  }

  receiveSelectedMeals(event) {
    console.log(event);
    this.plannedMeal = event;
  }
}
