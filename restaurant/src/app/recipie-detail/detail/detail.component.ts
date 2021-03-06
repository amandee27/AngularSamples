import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { RecipieDetail } from 'src/app/model/RecipieDetail';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  query: string | null = null;
  recipieDetail?: RecipieDetail;
  recipieLable: string = '';
  recipeImage: string = '';
  dietLable: string[] = [];
  calories: number = 0;
  totalTime: number = 0;
  mealType: string[] = [];
  dishType: string[] = [];
  healthLabels: string[] = [];
  cautions: string[] = [];
  dietLables: string[] = [];

  constructor(
    private _http: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('Detail initialise');
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.query = params.get('id');
      console.log(this.query);
      if (this.query !== null) {
        this._http.getRecipeDetail(this.query).subscribe((data) => {
          this.recipieDetail = data;
          this.recipieLable = this.recipieDetail.recipe.label;
          this.recipeImage = this.recipieDetail.recipe.image;
          this.dietLable = this.recipieDetail.recipe.dietLabels;
          this.calories = this.recipieDetail.recipe.calories;
          this.totalTime = this.recipieDetail.recipe.totalTime;
          this.mealType = this.recipieDetail.recipe.mealType;
          this.dishType = this.recipieDetail.recipe.dishType;
          this.healthLabels = this.recipieDetail.recipe.healthLabels;
          this.cautions = this.recipieDetail.recipe.cautions;
          this.dietLable = this.recipieDetail.recipe.dietLabels;
          console.log(this.cautions);
        });
      }
    });
  }
}
