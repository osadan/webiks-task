import { Component } from '@angular/core';
import { msmService } from '../services/msmService';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    selector: 'msmMenu',
    template: require('./msmMenu.html'),
    directives: [ROUTER_DIRECTIVES]
})

export class msmMenu {
    constructor(msmService: msmService) {
        console.log('msmMenu constrctor');
        this.service = msmService;
    }
    /**
     * listener to display category content
     * @param  {[type]} categoryId [description]
     * @return {[type]}            [description]
     */
    categoryContent(categoryId) {
        return this.service.getContents(categoryId);
    }

    /**
     * listener to display the categories
     * @return {[type]} [description]
     */
    categories() {
        return this.service.getCategories();    
    }
}
