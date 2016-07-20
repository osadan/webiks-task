import { Injectable } from '@angular/core';

@Injectable()
export class msmService {
	constructor(){
		this.categories = [
			{'id': 1,'name': 'Sports'},
			{'id': 2,'name': 'Science' },
			{'id': 3,'name': 'Art'}
		];	
	}
	

	getCategories = () =>{
		return this.categories;
	}	
		
	getCategory = (id) =>{
		let result = this.categories.find(item => item.id == id);		
		return result;
	};

	saveCategory = (name) =>{

	};

	changeCategory = (id,name) =>{

	};	

	removeCategory = (id) => {

	};
}