import {Component} from '@angular/core';
import {msmService} from '../services/msmService';



@Component({
  selector: 'msmMenu',
  template: require('./msmMenu.html'),
  providers: [msmService]
})

export class msmMenu {
	constructor(s: msmService){
		
		console.log(s);
	}
}