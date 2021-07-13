import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { RecipieDetail } from './model/RecipieDetail';

@Injectable({
  providedIn: 'root',
})
export class DetailServiceService {
  constructor() {}

  private recipieDetailSource = new BehaviorSubject<RecipieDetail | null>(null);

  // Observable string streams
  recipieDetail$ = this.recipieDetailSource.asObservable();

  getRecipeDetail(query: RecipieDetail) {
    return this.recipieDetailSource.next(query);
  }
}
