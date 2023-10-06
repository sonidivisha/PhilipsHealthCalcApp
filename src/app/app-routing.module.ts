import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCalculatorsDashboardComponent } from './main-calculators-dashboard/main-calculators-dashboard.component';
import { BmiDashboardComponent } from './bmi-calculators/bmi-dashboard/bmi-dashboard.component';
import { BodyDashboardComponent } from './body-measurement/body-dashboard/body-dashboard.component';
import { ArmyDashboardComponent } from './army-calculators/army-dashboard/army-dashboard.component';
import { DiabetesDashboardComponent } from './diabetes-calculators/diabetes-dashboard/diabetes-dashboard.component';
import { DietaryDashboardComponent } from './dietary-calculators/dietary-dashboard/dietary-dashboard.component';
import { SleepDashboardComponent } from './sleep-calculators/sleep-dashboard/sleep-dashboard.component';

const routes: Routes = [
  {path: "", redirectTo:"health",pathMatch:"full" },
  {path:"health", component: MainCalculatorsDashboardComponent},
  {path:"body", component:BodyDashboardComponent},
  {path:"army", component:ArmyDashboardComponent},
  {path:"bmi", component:BmiDashboardComponent},
  {path:"diabetes", component:DiabetesDashboardComponent},
  {path:"dietary", component:DietaryDashboardComponent},
  {path:"sleep", component:SleepDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
