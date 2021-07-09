import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { recipe } from '../model/recipie';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.scss'],
})
export class RecipiesComponent implements OnInit {
  public recipes: recipe[] = [];
  public recipeId: any;
  parameter: string = '';

  length = -1;
  constructor(
    private _http: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let newParameter = this.route.snapshot.paramMap.get('id');
    this.recipeId = newParameter;
    if (this.recipeId !== null) {
      this._http.getRecipies(this.recipeId).subscribe((data) => {
        this.recipes = data.hits;
      });
    }
  }

  addParameter() {
    this._http.getRecipies(this.parameter).subscribe((data) => {
      this.recipes = data.hits;
    });

    this.router.navigate(['/recepies', this.parameter]);
  }
}
