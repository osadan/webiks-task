import { Injectable } from '@angular/core';

@Injectable()
export class msmService {
	defaultCategories = () =>{
		return [
			{'id': 1,'name': 'Sports'},
			{'id': 2,'name': 'Science' },
			{'id': 3,'name': 'Art'}
		];
	}
}