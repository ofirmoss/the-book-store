import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from 'src/app/pages/login/login.component';
import { SearchPageComponent } from 'src/app/pages/search-page/search-page.component';
import { WishlistComponent } from 'src/app/pages/wishlist/wishlist.component';

const routes: Routes = [
  {
    path: '',
    component: SearchPageComponent,
  },
  {
    path: 'search-book',
    component: SearchPageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
