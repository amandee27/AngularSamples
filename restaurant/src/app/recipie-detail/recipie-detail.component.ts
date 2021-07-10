import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpService } from '../http.service';
import { RecipieDetail } from '../model/RecipieDetail';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.scss'],
})
export class RecipieDetailComponent implements OnInit {
  //recipieDetail: RecipieDetail|null=null;
  recipieDetail?: RecipieDetail;
  constructor(private _http: HttpService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let query = params.get('id');
      console.log(query);
      if (query !== null) {
        this._http.getRecipeDetail(query).subscribe((data) => {
          this.recipieDetail = data;
          console.log(this.recipieDetail);
        });
      }
    });
  }
}
