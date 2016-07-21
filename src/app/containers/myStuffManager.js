import {Component} from '@angular/core';
import {msmBreadcrumbs} from '../components/msmBreadcrumbs';
import {msmMenu} from '../components/msmMenu';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {msmService} from '../services/msmService';


@Component({
  selector: 'myStuffManager',
  template: require('./myStuffManager.html'),
  directives: [ROUTER_DIRECTIVES,msmBreadcrumbs,msmMenu],
providers: [msmService]
})

export class myStuffManager {
	constructor(msmService:msmService){
		console.log('my stuff manager class constructor');
	}	
}
