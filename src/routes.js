import { myStuffManager } from './app/containers/myStuffManager'
import { categoryManager } from './app/containers/categoryManager'
import { contentManager } from './app/containers/contentManager'
import { Hello } from './app/hello';

export const routes = [
	 {
        path: 'category/:id',
        component: categoryManager,
    },
    {
        path: 'category/:id/content',
        component: contentManager
    },
    {
    	path: 'category/:id/content/:content-id/:action',
        component: contentManager
    },
    {
        path: 'categories',
        component: categoryManager
    },
    {
        path: '',
        component: Hello
    }


];
