import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.scss'],
})
export class RecipiesComponent implements OnInit {
  recipes: Object = {};
  constructor(private _http: HttpService) {}

  ngOnInit(): void {
    this._http.getRecipies().subscribe((data) => {
      this.recipes = data;
      console.log(this.recipes);
    });
  }
}
