import { Injectable } from '@angular/core';

@Injectable()

export class msmService {
 	 constructor(){
 	 	console.log('msmService constructor');
		this.data = [
			{'id': 1,'name': 'Sports',content: []},
			{'id': 2,'name': 'Science',content:[]},
			{'id': 3,'name': 'Art',content:[]}
		];	
		

		//this.getContents = this.getContents.bind(this);
		//this.saveContent = this.saveContent.bind(this);
		
	}
	
	//categories CRUD functions 
	getCategories (){
		let result = this.data.map(item =>{ return{'id': item.id,'name': item.name};});
		//console.log(result);
		return result;
	}	
		
	getCategory(id) {
		let result = this.data.find(item => item.id == id);		
		//console.log('getCategory',result);
		//console.log('this.data get category',this.data);
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
		let category = this.getCategory(categoryId);
		return category.content;

	}

	getContent(contentId){

	}

	saveContent(categoryId,data){
		let category = this.getCategory(categoryId);
		let length = category.content.length;
		let contentId = categoryId + "" + ++length;
		category.content.push({
							id : contentId, 
							title: data.title,
							description: data.description
						});
		
		return contentId;

	}

	changeContent (contentId,data){

	}

	removeContent(contentId){

	}


}