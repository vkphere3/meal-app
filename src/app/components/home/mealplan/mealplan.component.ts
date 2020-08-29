import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mealplan',
  templateUrl: './mealplan.component.html',
  styleUrls: ['./mealplan.component.scss'],
})
export class MealplanComponent implements OnInit {
  constructor() {}
  @Input() plannedMeal;

  ngOnInit(): void {}
}
