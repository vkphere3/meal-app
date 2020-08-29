import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss'],
})
export class MealComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  @Input() selectedMeal;
  @Input() availableList;
  @Output() meals = new EventEmitter<any>();

  selectedOptions = [];
  done = false;

  selcetedCheckbox(type, option) {
    this.done = false;
    console.log(option.selected);
    if (!option.selected) {
      this.selectedOptions.forEach((selectedOption) => {
        if (selectedOption['type'] == type) {
          this.done = true;
          selectedOption['options'].push({ ...option });
        }
      });
      if (!this.done) {
        this.selectedOptions.push({ type: type, options: [{ ...option }] });
      }
      console.log(this.selectedOptions);
      this.meals.emit(this.selectedOptions);
    }
    // Removing when unchecked
    if (option.selected) {
      this.selectedOptions.forEach((item) => {
        if (item.type === type) {
          item.options.forEach((e, i) => {
            if (e.food === option.food) {
              item.options.splice(i, 1);
            }
          });
        }
      });
    }
  }
  selectMeal(meal) {
    // console.log(meal);
    this.selectedMeal = meal;
  }
}
