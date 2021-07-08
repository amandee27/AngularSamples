import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { recipe } from '../model/recipie';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.scss'],
})
export class RecipiesComponent implements OnInit {
  public recipes: recipe[] = [];

  length = -1;
  constructor(private _http: HttpService) {}
  recipesData: recipe[] = [];
  parameter: string = '';

  ngOnInit(): void {}

  addParameter() {
    this._http.getRecipies(this.parameter).subscribe((data) => {
      this.recipes = data.hits;
    });
  }
}
