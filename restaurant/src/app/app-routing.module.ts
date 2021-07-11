import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipiesComponent } from './recipies/recipies.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { PageNotWorkingComponent } from './page-not-working/page-not-working.component';
import { FormsModule } from '@angular/forms';
import { RecipieDetailComponent } from './recipie-detail/recipie-detail.component';
import { HomeComponent } from './home/home.component';
import { NutrientsComponent } from './recipie-detail/nutrients/nutrients.component';
import { IngredientsComponent } from './recipie-detail/ingredients/ingredients.component';
import { DetailComponent } from './recipie-detail/detail/detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'recepies', component: RecipiesComponent },
  {
    path: 'recepies/:id',
    component: RecipieDetailComponent,
    children: [
      { path: '', component: DetailComponent },
      { path: 'nutrients', component: NutrientsComponent },
      { path: 'ingedients', component: IngredientsComponent },
    ],
  },
  { path: 'about', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: PageNotWorkingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule],
})
export class AppRoutingModule {}
