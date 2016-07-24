import 'zone.js/dist/zone';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import { inject, async, setBaseTestProviders, TestComponentBuilder } from '@angular/core/testing';
import { msmService } from './msmService';
import { TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS } from '@angular/platform-browser-dynamic/testing';

//setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

describe('Make sure service is initilize', () => {
    var service = undefined;
    beforeEach(() => {
        service = new msmService();
    });
    it('make sure there is 3 default categories', () => {
        expect(service.getCategories().length).toBe(3);
    });

});

describe('category CRUD operations', () => {
    var service = undefined;
    beforeEach(() => {
        service = new msmService();
    });
    it('should add category', () => {
        service.saveCategory(name);
        expect(service.getCategories().length).toBe(4);
    });

    it('should remove category', () => {
        let categoryId = 2;
        service.removeCategory(categoryId);
        expect(service.getCategories().length).toBe(2);
        expect(service.getCategory(categoryId)).toBe(undefined);
    });

    it('should update category', () => {
        let name = 'Tora';
        let id = 2;
        expect(service.getCategory(id).name).toBe('Science');
        service.updateCategory(id, name);
        expect(service.getCategory(id).name).toBe('Tora');
    });

    it('should get category by id', () => {
        let id = 2;
        expect(service.getCategory(id).name).toBe('Science');
    });

})
