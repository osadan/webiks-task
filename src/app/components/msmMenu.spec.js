import 'zone.js/dist/zone';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import { provide } from '@angular/core';
import { msmService } from '../services/msmService';
import { msmMenu } from './msmMenu';
import { myStuffManager } from '../containers/myStuffManager';
import { routes } from '../../routes';
import { provideRouter,Router,RouteConfig,ROUTER_DIRECTIVES,RouterOutlet,ROUTER_PRIMARY_COMPONENT} from '@angular/router';
import { SpyLocation } from '@angular/common/testing/location_mock';
import { beforeEachProviders,inject, async, setBaseTestProviders, TestComponentBuilder } from '@angular/core/testing';
import { TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS } from '@angular/platform-browser-dynamic/testing';



describe('msm menu component', () => {
    let tcb; //test component builder
    let service;

    beforeEachProviders(() => [
        TestComponentBuilder,
        msmMenu,
        msmService//,
        ,provide(Location, {useClass: SpyLocation})
  		,provide(ROUTER_PRIMARY_COMPONENT, {useValue: myStuffManager})
  		,provide(Router,{useClass: routes})
    ]);

    beforeEach(inject([TestComponentBuilder,msmService], (_tcb,_service) => {
        tcb = _tcb;
        service = _service;
    }));

    it('it should render the categories menu', () => {
    	tcb.createAsync(msmMenu).then(fixture => {
    		let _msmMenu = fixture.componentInstance, 
        	element = fixture.nativeElement;
        	_msmMenu.categories = service.getCategories();
        	 fixture.detectChanges(); //trigger change detection
        	 expect(element.querySelectorAll('li','.content-list').length).toBe(3);
    	});
    });
});
