import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { Recipe } from '../model/recipie';
import { RecipieDetailComponent } from '../recipie-detail/recipie-detail.component';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.scss'],
})
export class RecipiesComponent implements OnInit, OnDestroy {
  public recipes: Recipe[] = [];
  public query: string | null = null;
  public nextRecipiesLink: string = '';
  constructor(
    private _http: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnDestroy() {
    console.log('Recipes component Destroy');
  }
  ngOnInit(): void {
    console.log('Recipe component init');
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      let query = params.get('q');
      console.log(params.get('id'));
      this.query = query;
      if (this.query !== null) {
        this._http.getRecipies(this.query).subscribe((data) => {
          this.recipes = data.hits;
          this.nextRecipiesLink = data._links.next.href;
        });
      } else {
        this.recipes = [];
      }
    });
  }

  handleSearch(parameter: string) {
    this.router.navigate(['/recepies'], { queryParams: { q: parameter } });
  }

  loadMore() {
    this._http.getMoreRecipies(this.nextRecipiesLink).subscribe((data) => {
      this.recipes = this.recipes.concat(data.hits);
      this.nextRecipiesLink = data._links.next.href;
    });
  }

  recepieDetail(url: string) {
    var regex = /\/v2\/(.*)\?/g;
    let matches = regex.exec(url);
    if (matches !== null) {
      let id = matches[1];
      this.router.navigate(['/recepies', id]);
    }
  }
}
