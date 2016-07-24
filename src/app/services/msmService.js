import { Injectable } from '@angular/core';

@Injectable()

export class msmService {
    constructor() {
        console.log('msmService constructor');
        this.data = [
            { 'id': 1, 'name': 'Sports', content: [] },
            { 'id': 2, 'name': 'Science', content: [] },
            { 'id': 3, 'name': 'Art', content: [] }
        ];
    }

    //categories CRUD functions 
    getCategories() {
        let result = this.data.map(item => {
            return { 'id': item.id, 'name': item.name }; });
        //console.log(result);
        return result;
    }

    getCategory(id) {
        let result = this.data.find(item => item.id == id);
        return result;
    }

    saveCategory(name) {
    	let id = this.data.length + 1;
    	this.data.push({
    		id: id,
    		name: name,
    		content: []
    	})
    }

    updateCategory(id, name) {
    	let category =  this.getCategory(id);
    	category.name = name;
    	return ;
    }

    removeCategory(id) {
    	let index = this.data.findIndex(item => item.id == id);
    	this.data.splice(index, 1);
    }

    //content CRUD functions
    getContents(categoryId) {
        let category = this.getCategory(categoryId);
        return category.content;

    }

    getContent(contentId) {
        
        let categoryId = contentId.split('@')[0];
        let category = this.getCategory(categoryId);
        let content = category.content.find(item => item.id == contentId);
        
        return content;

    }

    saveContent(categoryId, data) {
        
        let category = this.getCategory(categoryId);
        let length = category.content.length;
        let contentId = categoryId + "@" + ++length;
        
        category.content.push({
            id: contentId,
            title: data.title,
            description: data.description
        });

        return contentId;
	}

    updateContent(contentId, data) {
        
        let content = this.getContent(contentId);
        
        content.title = data.title;
        content.description = data.description;
        
        return contentId;
    }

    removeContent(contentId) {
        
        let categoryId = contentId.split('@')[0];
        let category = this.getCategory(categoryId);
        let index = category.content.findIndex(item => item.id == contentId);
        
        category.content.splice(index, 1);
        
        return;

    }
}
