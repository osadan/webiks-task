import { Component } from '@angular/core';
import { msmService } from '../services/msmService';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'msmBreadcrumbs',
    template: require('./msmBreadcrumbs.html'),
    directives: [ROUTER_DIRECTIVES]
})

export class msmBreadcrumbs {
    constructor(router: Router, route: ActivatedRoute, msmService: msmService) {
        console.log('msm breadcrumbs constructor');
        this.route = route;
        this.router = router;
        this.service = msmService;
        this.category = {};
        this.content = {};
        this.action = undefined;
        this.title = undefined;
    }

    ngOnInit() {
        //subscribe for router change events
        this.router.events.subscribe(value => {
            
            // unset the data
            this.category = {};
            this.title = undefined;
            this.action = undefined
            this.url = value.url;
            
            // get the location data
            let parts = this.url.split('/');
            
            //	since the url starts with '/' the first element is an empty string
            parts.shift();
            
            // a bit logic here to combine the correct data
            if (parts[0] === 'category') {
                this.category = this.service.getCategory(parts[1]);
                
                if (parts[3] !== undefined) {
                    this.content = this.category.content.find(item => item.id == parts[3]);
                    
                    if (this.content) {
                        this.title = this.content.title;
                    }
                    if (parts[4]) {
                        this.action = parts[4];
                    }
                } else if (parts[2] !== undefined) {
                    this.action = 'content create';
                }

            }
        });
    }
}
