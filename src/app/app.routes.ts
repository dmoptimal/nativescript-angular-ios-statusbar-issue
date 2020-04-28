import { Routes } from '@angular/router';

import { HomeComponent } from '@src/app/home/home.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
];
