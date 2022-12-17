import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { BuilderComponent } from './components/builder/builder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnswerComponent } from './components/answer/answer.component';


@NgModule({
	declarations: [
    BuilderComponent,
    AnswerComponent
  ],
	imports: [
		CommonModule,
		FormRoutingModule,
		FormsModule,
		ReactiveFormsModule,
	]
})
export class FormModule { }
