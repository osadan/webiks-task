import { Injectable } from '@angular/core';

@Injectable()

export class msmService {
	constructor(){
		this.data = [
			{'id': 1,'name': 'Sports'},
			{'id': 2,'name': 'Science' },
			{'id': 3,'name': 'Art'}
		];	
		this.contents = [

		]

		//this.getContents = this.getContents.bind(this);
		//this.saveContent = this.saveContent.bind(this);
		
	}
	
	//categories CRUD functions 
	getCategories (){
		let result = this.data.map(item =>{ return{'id': item.id,'name': item.name};});
		console.log(result);
		return result;
	}	
		
	getCategory(id) {
		let result = this.data.find(item => item.id == id);		
		console.log('getCategory',result);
		console.log('this.data get category',this.data);
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
		console.log('getContents',this.contents);
		let result =  this.contents.find(item => item.categoryId == categoryId );
		console.log(result);	
		return result;

	}

	getContent(contentId){

	}

	saveContent(categoryId,data){
		console.log('saveContent',this.contents);
		let length = this.contents.length;
		let contentId =  ++length;
		
		this.contents.push({
							id : contentId, 
							title: data.title,
							description: data.description,
							categoryId: categoryId
						});
		
		return contentId;

	}

	changeContent (contentId,data){

	}

	removeContent(contentId){

	}


}