import 'reflect-metadata';
import 'zone.js';

import {bootstrap} from '@angular/platform-browser-dynamic';

import './index.scss';

import {provideRouter} from '@angular/router';
import {enableProdMode} from '@angular/core';
import {routes, Root} from './routes';

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

bootstrap(Root, [
  provideRouter(routes)
]);
