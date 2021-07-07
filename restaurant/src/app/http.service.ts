import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  getRecipies() {
    console.log('hey !');
    return this.http.get(
      'https://api.edamam.com/api/recipes/v2?type=public&q=egg&app_id=c395f4a9&app_key=a5a8e229ca6add8577558feac16a459a&field=label&field=url&field=image&from=10&to=5'
    );
  }
}
