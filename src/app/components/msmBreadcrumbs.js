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
        this.router.events.subscribe(value => {
            this.url = value.url;
            let parts = this.url.split('/');
            //	since the url starts with '/' the first element is an empty string
            parts.shift();
            if (parts[0] === 'category') {
                this.category = this.service.getCategory(parts[1]);
                console.log(this.category);
                if (parts[3] !== undefined) {
                    this.content = this.category.content.find(item => item.id == parts[3]);
                    console.log(this.content);
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
