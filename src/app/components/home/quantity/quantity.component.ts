import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss'],
})
export class QuantityComponent implements OnInit {
  constructor() {}
  @Input() plannedMeal;

  countCalories = 0;

  ngOnInit(): void {
    this.plannedMeal.forEach((meal) => {
      meal.options.forEach((option) => {
        this.countCalories += option.calories;
      });
    });
  }
}
