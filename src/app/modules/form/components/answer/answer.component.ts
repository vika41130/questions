import { Component, OnInit } from '@angular/core';
import { CacheService } from 'src/app/services/cache.service';
import { IQuestion } from '../../models/question.model';

@Component({
	selector: 'app-answer',
	templateUrl: './answer.component.html',
	styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

	answerList?: Array<IQuestion>;
	constructor(
		private cacheSvc: CacheService
	) {
		this.answerList = cacheSvc.get('answer_list');
	}

	ngOnInit(): void {
	}

}
