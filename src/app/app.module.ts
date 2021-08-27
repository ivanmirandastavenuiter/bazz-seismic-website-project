import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/custom/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { GalleryComponent } from './components/custom/gallery/gallery.component';
import { HomeFooterComponent } from './components/custom/home/home-footer/home-footer.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ContactComponent } from './components/custom/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GalleryComponent,
    HomeFooterComponent,
    FooterComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
