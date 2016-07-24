import {Component,OnInit} from '@angular/core';
import{msmService} from '../services/msmService';
import {ROUTER_DIRECTIVES} from '@angular/router';


@Component({
  selector: 'msmMenu',
  template: require('./msmMenu.html'),
  directives: [ROUTER_DIRECTIVES]
})

export class msmMenu implements OnInit {
	constructor(msmService: msmService){
		
		this.service = msmService;
		this.categories = this.service.getCategories();
	}
	ngOnInit() {
		
		//this.categories = this.service.getCategories();	
	}
	categoryContent (categoryId){
		return  this.service.getContents(categoryId);
	}
}