import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { recipe } from '../model/recipie';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.scss'],
})
export class RecipiesComponent implements OnInit {
  public recipes: recipe[] = [];
  public query: string | null = null;
  constructor(
    private _http: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      let query = params.get('q');
      console.log(params.get('id'));
      this.query = query;
      if (this.query !== null) {
        this._http.getRecipies(this.query).subscribe((data) => {
          this.recipes = data.hits;
        });
      }
    });
  }

  handleSearch(parameter: string) {
    this.router.navigate(['/recepies'], { queryParams: { q: parameter } });
  }
}
