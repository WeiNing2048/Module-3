import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "weathers", pathMatch: "full" },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  {
    path: "weathers",
    loadChildren: "./weathers/weathers.module#WeathersPageModule"
  },
  {
    path: "weather-details/:timestamp/:city",
    loadChildren:
      "./weather-details/weather-details.module#WeatherDetailsPageModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
