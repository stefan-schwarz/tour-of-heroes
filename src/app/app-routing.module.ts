import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DrivenFormComponent } from './driven-form/driven-form.component';
import { DirectivesComponent } from './directives/directives.component';
import { StrucDirectiveComponent } from './struc-directive/struc-directive.component';
import { DynamicComponent } from './dynamic/dynamic.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'heroes', component: HeroesComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: HeroDetailComponent},
  { path: 'form', component: DrivenFormComponent},
  { path: 'directives', component: DirectivesComponent},
  { path: 'struc-directive', component: StrucDirectiveComponent},
  { path: 'dynamic', component: DynamicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
