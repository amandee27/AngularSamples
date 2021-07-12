import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { RecipieDetail } from '../model/RecipieDetail';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.scss'],
})
export class RecipieDetailComponent implements OnInit {
  //recipieDetail: RecipieDetail|null=null;
  query: string | null = null;
  recipieDetail?: RecipieDetail;
  recipieLable: string = '';
  recipeImage: string = '';

  constructor(
    private _http: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.query = params.get('id');
      console.log(this.query);
      if (this.query !== null) {
        this._http.getRecipeDetail(this.query).subscribe((data) => {
          this.recipieDetail = data;
          this.recipieLable = this.recipieDetail.recipe.label;
          this.recipeImage = this.recipieDetail.recipe.image;

          console.log(this.recipieDetail.recipe.label);
        });
      }
    });
  }

  handleNutirents(url: string, id: any, nutrient: string) {
    console.log('nutrients');
    this.router.navigate([url, id, nutrient]);
  }

  handleIngredients(url: string, id: any, ingedients: string) {
    console.log('ingedients');
    this.router.navigate([url, id, ingedients]);
  }
}
