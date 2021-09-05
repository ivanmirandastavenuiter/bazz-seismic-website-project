import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/custom/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { GalleryComponent } from './components/custom/gallery/gallery.component';
import { HomeFooterComponent } from './components/custom/home/home-footer/home-footer.component';
import { FooterComponent } from './components/shared/footer/footer.component';
// import { ContactComponent } from './components/custom/contact/contact.component';
import { ParentNavbarComponent } from './components/test/parent-navbar/parent-navbar.component';
import { SectionOneComponent } from './components/test/section-one/section-one.component';
import { SectionTwoComponent } from './components/test/section-two/section-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GalleryComponent,
    HomeFooterComponent,
    FooterComponent,
    // ContactComponent,
    ParentNavbarComponent,
    SectionOneComponent,
    SectionTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
