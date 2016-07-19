import 'zone.js/dist/zone';
import 'zone.js/dist/async-test';
import {Hello} from './hello';
import {inject, async, setBaseTestProviders, TestComponentBuilder} from '@angular/core/testing';
import {TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS} from '@angular/platform-browser-dynamic/testing';

setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

describe('hello component', () => {
  it('should render hello world', async(inject([TestComponentBuilder], tcb => {
    tcb.createAsync(Hello)
      .then(fixture => {
        fixture.detectChanges();
        const hello = fixture.nativeElement;
        expect(hello.querySelector('h1').textContent).toBe('Hello World!');
      });
  })));
});
