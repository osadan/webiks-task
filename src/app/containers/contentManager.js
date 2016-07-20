import {Component, OnInit, OnDestroy} from '@angular/core';
import {msmService} from '../services/msmService';
import { Router, ActivatedRoute } from '@angular/router';
import {ROUTER_DIRECTIVES} from '@angular/router';


@Component({
  selector: 'contentManager',
  template: require('./contentManager.html'),
  providers: [msmService],
  directives: [ROUTER_DIRECTIVES]

})

export class contentManager implements OnInit, OnDestroy {
	constructor( route: ActivatedRoute,
     router: Router,msmService:msmService){
		console.log('category view constructor');
		this.route = route;
		this.router = router;
		this.service = msmService;
	}
    ngOnInit(){
    	this.sub = this.route.params.subscribe(params => {
       		//let id = +params['id']; // (+) converts string 'id' to a number
    		console.log(params);
    		//this.name = this.service.getCategory(id).name;
       		//this.service.getHero(id).then(hero => this.hero = hero);
     	});
    	
    }

}