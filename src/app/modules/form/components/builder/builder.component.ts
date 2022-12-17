import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormArray, FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CacheService } from 'src/app/services/cache.service';
import { IQuestion } from '../../models/question.model';

@Component({
	selector: 'app-builder',
	templateUrl: './builder.component.html',
	styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {

	modalRef?: BsModalRef;
	questionForm?: FormGroup;
	addQuestionForm?: FormGroup;
	currentQuestion?: IQuestion;
	optionList?: Array<string>;

	constructor(
		private formBuilder: FormBuilder,
		private modalService: BsModalService,
		private cacheSvc: CacheService
	) {
		this.questionType?.valueChanges.subscribe(value => {
			console.log('value', value);
		});
	}

	ngOnInit(): void {
	}

	buildQuestionForm(question: IQuestion) {
		// const checkboxArray  = [];
		// for (let i = 0; i < question.checkboxAnswer?.length!; i++) {
		// 	checkboxArray.push(new FormControl(false));
		// }
		// this.questionForm = this.formBuilder.group({
		// 	paragraphAnswer: ['', [question.isRequired ? Validators.required : null]],
		// 	checkboxAnswer: new FormArray(checkboxArray, question.isRequired ? Validators.required : null)
		// });
	}

	buildAddQuestionForm() {
		this.addQuestionForm = this.formBuilder.group({
			question: ['', Validators.required],
			questionType: ['pagagraph', Validators.required],
			checkboxAnswer: new FormArray([], Validators.required)
		});
	}

	addNewQuestion(template: TemplateRef<any>) {
		this.modalRef = this.modalService.show(template);
		this.buildAddQuestionForm();
	}

	submitAddQuestion() {
		// validate
		// add question to list
		this.buildQuestionForm(this.currentQuestion!);
	}

	resetQuestionModal() {
		this.currentQuestion = undefined;
	}

	addAnswerOption() {
		// const checkboxArray: FormControl[] = [];
		// this.checkboxArray.
	}

	// getter, setter
	get question() {
		return this.addQuestionForm?.get('question');
	}
	get questionType() {
		return this.addQuestionForm?.get('questionType');
	}
	get checkboxArray() {
		return this.addQuestionForm?.get('checkboxArray');
	}

	fakeAddNewQuestion() {
		this.currentQuestion = {
			question: 'Please tell us about yourself ?',
			questionType: 'paragraph',
			paragraphAnswer: `I’m a senior developer with 12 years of experience
				building large scale enterprise applications. I’m
				fanatical about performance and have excellent
				attention to detail`,
		};
		this.modalRef?.hide();
		this.buildQuestionForm(this.currentQuestion);
		this.cacheSvc.add('answer_list', this.currentQuestion);
	}


}
