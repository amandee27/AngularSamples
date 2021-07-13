import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { DetailServiceService } from 'src/app/detail-service.service';
import { HttpService } from 'src/app/http.service';
import { Nutrients, RecipieDetail } from 'src/app/model/RecipieDetail';

@Component({
  selector: 'app-nutrients',
  templateUrl: './nutrients.component.html',
  styleUrls: ['./nutrients.component.scss'],
})
export class NutrientsComponent implements OnInit, OnDestroy {
  query: string | null = null;
  recipieDetail: RecipieDetail | null = null;
  nutrients?: Nutrients;
  subscription?: Subscription;
  constructor(
    private _http: HttpService,
    private route: ActivatedRoute,
    private router: Router,
    private recipieDetailService: DetailServiceService
  ) {}

  ngOnInit(): void {
    // this.route.parent?.paramMap.subscribe((params: ParamMap) => {
    //   this.query = params.get('id');
    //   console.log(this.query);
    //   if (this.query !== null) {
    //     this._http.getRecipeDetail(this.query).subscribe((data) => {
    //       this.recipieDetail = data;
    //       this.nutrients = data.recipe.totalNutrients;
    //       console.log(data.recipe);
    //     });
    //   }
    // });
    console.log('Nutrition initialise');

    this.subscription = this.recipieDetailService.recipieDetail$.subscribe(
      (data) => {
        if (data !== null) {
          this.recipieDetail = data;
          this.nutrients = data.recipe.totalNutrients;
          console.log(this.nutrients);
        }
      }
    );
    console.log('subscribed');
  }
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription?.unsubscribe();
  }
}
