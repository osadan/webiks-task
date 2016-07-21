import { Injectable } from '@angular/core';

@Injectable()

export class msmService {
	constructor(){
		this.data = [
			{'id': 1,'name': 'Sports',content:[]},
			{'id': 2,'name': 'Science',content:[] },
			{'id': 3,'name': 'Art',content: []}
		];	
	}
	
	//categories CRUD functions 
	getCategories (){
		let result = this.data.map(item =>{ return{'id': item.id,'name': item.name};});
		console.log(result);
		return result;
	}	
		
	getCategory(id) {
		let result = this.data.find(item => item.id == id);		
		return result;
	}

	saveCategory (name){

	}

	changeCategory(id,name){

	}	

	removeCategory(id)  {

	}

	//content CRUD functions
	getContents(categoryId){

	}

	getContent(contentId){

	}

	saveContent(categoryId,data){
		let category =this.data.find(item => item.id == categoryId);
		let length = category.content.length;
		let contentId = parseInt(categoryId + "" + ++length);
		category.content.push({id: contentId,title: data.title,description: data.description});
		console.log(this.data);

	}

	changeContent (contentId,data){

	}

	removeContent(contentId){

	}


}