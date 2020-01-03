import {Component, Input, OnInit} from '@angular/core';
import {Meal} from '../../model/models';


@Component({
  selector: 'app-meal-summary',
  templateUrl: './meal-summary.component.html',
  styleUrls: ['./meal-summary.component.css']
})
export class MealSummaryComponent implements OnInit {

  @Input()
  meal: Meal;
  today: Date;

  constructor() { }

  ngOnInit() {
    this.today = new Date();
  }

}
