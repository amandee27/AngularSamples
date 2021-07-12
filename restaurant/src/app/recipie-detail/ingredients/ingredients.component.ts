import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { RecipieDetail } from 'src/app/model/RecipieDetail';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
})
export class IngredientsComponent implements OnInit {
  query: string | null = null;
  recipieDetail?: RecipieDetail;
  ingredientLines: string[] = [];

  constructor(
    private _http: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.parent?.paramMap.subscribe((params: ParamMap) => {
      this.query = params.get('id');
      console.log(this.query);
      if (this.query !== null) {
        this._http.getRecipeDetail(this.query).subscribe((data) => {
          this.recipieDetail = data;
          this.ingredientLines = data.recipe.ingredientLines;
          console.log(this.ingredientLines);
        });
      }
    });
  }
}
