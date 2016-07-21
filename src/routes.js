import {myStuffManager} from './app/containers/myStuffManager'
import {categoryManager} from './app/containers/categoryManager'
import {contentManager} from './app/containers/contentManager'
import {Hello} from './app/hello';

export const routes = [
  {
    path: '',
    component: Hello
  },
  {
  	path: 'category/:id',
  	component: categoryManager,
  	as: 'Categories'
  },
  {
  	path: 'category/:id/content/:action',
  	component: contentManager,
  	as: 'Content'
  }
];
