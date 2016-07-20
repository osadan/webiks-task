import {Component,OnInit} from '@angular/core';
import {msmService} from '../services/msmService';
import {ROUTER_DIRECTIVES} from '@angular/router';


@Component({
  selector: 'msmMenu',
  template: require('./msmMenu.html'),
  providers: [msmService],
  directives: [ROUTER_DIRECTIVES]
})

export class msmMenu {
	constructor(msmService: msmService){
		this.categories = msmService.defaultCategories;
	}
	ngOnInit() {
		console.log(msmService);
		
	}
}