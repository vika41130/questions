import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerComponent } from './components/answer/answer.component';
import { BuilderComponent } from './components/builder/builder.component';

const routes: Routes = [
	{
		pathMatch: 'full',
		path: '',
		redirectTo: 'builder'
	},
	{
		pathMatch: 'full',
		path: 'builder',
		component: BuilderComponent
	},
	{
		pathMatch: 'full',
		path: 'answer',
		component: AnswerComponent
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class FormRoutingModule { }
