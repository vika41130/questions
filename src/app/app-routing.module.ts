import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		pathMatch: 'full',
		path: '',
		redirectTo: 'form'
	},
	{
		path: 'form',
		loadChildren: () => import('./modules/form/form.module').then(m => m.FormModule)
	},
	{
		path: '**',
		redirectTo: 'form',
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
