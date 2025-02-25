import { Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'allitems', pathMatch: 'full' },

    {
      path: '',
      component: HomeComponent,
      children: [
        {
          path: 'allitems',
          loadComponent: () => import('./layout/allitems/allitems.component').then(m => m.AllitemsComponent),
          title: 'allitems'
        },
        {
          path: 'item/:id',
          loadComponent: () => import('./layout/item/item.component').then(m => m.ItemComponent),
          title: 'item'
        },
        {
          path: '**',
          loadComponent: () => import('./layout/notfound/notfound.component').then(m => m.NotfoundComponent),
        }
      ]
    },
  
   
];
