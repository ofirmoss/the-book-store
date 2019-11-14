import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { HeaderComponent } from './general-components/header/header.component';
import { ModalComponent } from './general-components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchPageComponent,
    WishlistComponent,
    HeaderComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
