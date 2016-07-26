import 'zone.js/dist/zone';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import { provide } from '@angular/core';
import { msmService } from '../services/msmService';
import { msmMenu } from './msmMenu';
import { myStuffManager } from '../containers/myStuffManager';
import { routes } from '../../routes';
import { provideRouter, Router, RouteConfig, ROUTER_DIRECTIVES, RouterOutlet, ROUTER_PRIMARY_COMPONENT } from '@angular/router';

import {AppModule, AppModuleFactory, AppModuleFactoryLoader, Compiler, ComponentResolver, Injectable, Injector} from '@angular/core';

import {Router, RouterOutletMap, Routes, UrlSerializer} from '../index';
import { Location, LocationStrategy } from '@angular/common';
import { MockLocationStrategy, SpyLocation } from '@angular/common/testing';
import { beforeEachProviders, inject, async, setBaseTestProviders, TestComponentBuilder } from '@angular/core/testing';
import { TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS } from '@angular/platform-browser-dynamic/testing';



describe('msm menu component', () => {
    let tcb; //test component builder
    let service;

    beforeEachProviders(() => [
        TestComponentBuilder,
        msmMenu,
        msmService //,
        ,provide(Location, { useClass: SpyLocation })
        ,provide(LocationStrategy, {useClass: MockLocationStrategy})
        ,provide(AppModuleFactoryLoader, {useClass: SpyAppModuleFactoryLoader }, {
            provide: Router,
            useFactory: (resolver: ComponentResolver, urlSerializer: UrlSerializer,
                outletMap: RouterOutletMap, location: Location, loader: AppModuleFactoryLoader,
                injector: Injector, routes: Routes) => {
                return new Router(
                    null, resolver, urlSerializer, outletMap, location, injector, loader, routes);
            },
            deps: [
                ComponentResolver, UrlSerializer, RouterOutletMap, Location, AppModuleFactoryLoader,
                Injector, ROUTES
            ]
        }

    ]);

    beforeEach(inject([TestComponentBuilder, msmService], (_tcb, _service) => {
        tcb = _tcb;
        service = _service;
    }));

    it('it should render the categories menu', () => {
        tcb.createAsync(msmMenu).then(fixture => {
            let _msmMenu = fixture.componentInstance,
                element = fixture.nativeElement;
            _msmMenu.categories = service.getCategories();
            fixture.detectChanges(); //trigger change detection
            expect(element.querySelectorAll('li', '.content-list').length).toBe(3);
        });
    });
});
