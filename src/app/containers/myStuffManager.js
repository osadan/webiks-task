import {Component} from '@angular/core';
import {msmBreadcrumbs} from '../components/msmBreadcrumbs';
import {msmMenu} from '../components/msmMenu';
import {ROUTER_DIRECTIVES} from '@angular/router';


@Component({
  selector: 'myStuffManager',
  template: require('./myStuffManager.html'),
  directives: [ROUTER_DIRECTIVES,msmBreadcrumbs,msmMenu]

})

export class myStuffManager {
	constructor(){
		console.log('my stuff manager class constructor');
	}	
}
