import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

const routes : Routes = [
	{ 
	  path: 'hero/:id', 
	  component: HeroDetailComponent },
	{
		path: 'heroes', 
		component: HeroesComponent,
		data: { title: 'Heroes List' }
	},
	{
		path: 'dashboard',
		component: DashboardComponent 
	},
	{
		path: 'detail/:id',
		component: HeroDetailComponent
	},
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	},
]

@NgModule({
	imports : [ RouterModule.forRoot(routes, { enableTracing: true }) ],
	exports : [ RouterModule ]
})

export class AppRoutingModule {}