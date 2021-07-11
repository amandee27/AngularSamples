import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecipiesComponent } from './recipies/recipies.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotWorkingComponent } from './page-not-working/page-not-working.component';
import { RecipieDetailComponent } from './recipie-detail/recipie-detail.component';
import { HomeComponent } from './home/home.component';
import { NutrientsComponent } from './recipie-detail/nutrients/nutrients.component';
import { IngredientsComponent } from './recipie-detail/ingredients/ingredients.component';
import { DetailComponent } from './recipie-detail/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipiesComponent,
    LoginComponent,
    AboutUsComponent,
    PageNotWorkingComponent,
    RecipieDetailComponent,
    HomeComponent,
    NutrientsComponent,
    IngredientsComponent,
    DetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
