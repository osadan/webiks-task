import 'reflect-metadata';
import 'zone.js';

import {bootstrap} from '@angular/platform-browser-dynamic';

import './index.scss';

import {provideRouter} from '@angular/router';
import {enableProdMode} from '@angular/core';
import {routes} from './routes';
import {myStuffManager} from './app/containers/myStuffManager';
import {msmService} from './app/services/msmService';
//import { provideForms } from '@angular/forms'; 

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

bootstrap(myStuffManager, [
  provideRouter(routes)
  ,msmService
  //,provideForms()
]);
