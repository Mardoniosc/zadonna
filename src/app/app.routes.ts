import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';


export const routes: Routes = [
  {
      path: '',
      redirectTo: '/category',
      pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'category',
    component: CategoryListComponent
  }

];
