import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { Nutrients, RecipieDetail } from 'src/app/model/RecipieDetail';

@Component({
  selector: 'app-nutrients',
  templateUrl: './nutrients.component.html',
  styleUrls: ['./nutrients.component.scss'],
})
export class NutrientsComponent implements OnInit {
  query: string | null = null;
  recipieDetail?: RecipieDetail;
  nutrients?: Nutrients;
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
          this.nutrients = data.recipe.totalNutrients;
          console.log(data.recipe);
        });
      }
    });
  }
}
