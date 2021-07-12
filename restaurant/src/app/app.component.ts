import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'restaurant';
  recipeItem: string = '';
  constructor(private route: Router) {}
  searchRecipie(searchRecipe: string) {
    this.recipeItem = searchRecipe;
    this.route.navigate(['/recepies'], { queryParams: { q: searchRecipe } });
  }
}
