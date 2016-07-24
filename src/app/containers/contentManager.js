import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { msmService } from '../services/msmService';
//import { FormBuilder, Validators } from '@angular/common';


@Component({
    selector: 'contentManager',
    template: require('./contentManager.html'),
    directives: [ROUTER_DIRECTIVES]

})

export class contentManager implements OnInit, OnDestroy {

    constructor(route: ActivatedRoute, router: Router, msmService: msmService) {
        console.log('category view constructor');
        this.route = route;
        this.router = router;
        this.service = msmService;
        this.content = {};
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {

            this.action = params['action'];
            if (!this.action) {
                this.action = 'create';
            }

            this.categoryId = params['id'];
            this.category = this.service.getCategory(this.categoryId);

            this.contentId = params['content-id'];
            if (this.contentId !== undefined) {
                this.content = this.category.content.find(item => item.id == this.contentId);
            }

            //in case we refreshed our page and we have the param but not the content
            //redirect to the home page
            if (this.content === undefined && params['content-id'] !== undefined) {
                this.router.navigate(['/']);
            }

        });

    }

    saveContent() {

        if (this.contentId) {
            this.service.updateContent(this.contentId, this.content);
        } else {
            this.contentId = this.service.saveContent(this.categoryId, this.content);
            this.content = {};
        }

        event.preventDefault();
        this.router.navigate(['/category', this.categoryId, '/content', this.contentId, '/view']);
    }

    editContent(contentId) {
        this.router.navigate(['/category', this.categoryId, '/content', this.contentId, '/edit']);
    }

    cancelForm() {
        this.content = {};
        event.preventDefault();
    }

    deleteContent() {
        this.service.removeContent(this.contentId);
        event.preventDefault();
        this.router.navigate(['/category', this.categoryId]);
    }
}
