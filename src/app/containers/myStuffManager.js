import {Component} from '@angular/core';
import {msmBreadcrumbs} from '../components/msmBreadcrumbs';
import {msmMenu} from '../components/msmMenu';
import {msmContent} from '../components/msmContent'


@Component({
  selector: 'myStuffManager',
  template: require('./myStuffManager.html'),
  directives: [msmBreadcrumbs, msmContent,msmMenu]
})

export class myStuffManager {
	constructor(){
		console.log('my stuff manager class constructor');
	}	
}
