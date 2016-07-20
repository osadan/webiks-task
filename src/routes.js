import {myStuffManager} from './app/containers/myStuffManager'
import {categoryView} from './app/containers/categoryView'
import {Hello} from './app/hello';

export const routes = [
  {
    path: '',
    component: Hello
  },
  {
  	path: 'categroy/:id',
  	component:categoryView
  }

];
