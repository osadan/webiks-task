import { Component, OnInit, OnDestroy } from '@angular/core';
import { msmService } from '../services/msmService';
import { Router, ActivatedRoute } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    selector: 'categoryManager',
    template: require('./categoryManager.html'),
    directives: [ROUTER_DIRECTIVES]
})

/**
 * class to mangae the category action
 */
export class categoryManager implements OnInit, OnDestroy {
    
    constructor(route: ActivatedRoute,
        router: Router, msmService: msmService) {
        this.route = route;
        this.router = router;
        this.service = msmService;
        this.edits = {};
    }

    ngOnInit() {
        
        // subscribe to route params chagne
        this.sub = this.route.params.subscribe(params => {
            
            // (+) converts string 'id' to a number
            this.id = +params['id']; 
            if(this.id){
                this.name = this.service.getCategory(this.id).name;
            }
            else{
                this.setCategories();
                this.action = 'manage';
            }
        });

    }

    setCategories(){
        this.categories = this.service.getCategories();
    }

    editCategory(categoryId){
        // I am holding an object to display the only open edit bar
        this.edits = {};
        this.edits[categoryId] = true;
        let category = this.service.getCategory(categoryId);
        this.editCategoryValue = category.name;
    }

    removeCategory(categoryId){
        this.service.removeCategory(categoryId);
        this.setCategories();
    }

    saveCategory(){
        if(this.newCategory){
            let categoryId = this.service.saveCategory(this.newCategory);
            this.newCategory = undefined;
            this.router.navigate(['/category', categoryId ]);
        }
    }

    updateCategory(categoryId){
        this.service.updateCategory(categoryId,this.editCategoryValue);
        this.edits = {};
        this.setCategories();
    }

}
