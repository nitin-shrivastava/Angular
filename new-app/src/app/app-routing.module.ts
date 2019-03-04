import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from  './weather/weather.component';
import { MovieComponent } from  './movie/movie.component';
import { CurrencyComponent } from  './currency/currency.component';

const routes: Routes = [
  {
    path:  'weather',
    component:  WeatherComponent
    },
    {
    path:  'movie',
    component:  MovieComponent
    },
    {
    path:  'currency',
    component:  CurrencyComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
