import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/custom/home/home.component';
import { GalleryComponent } from './components/custom/gallery/gallery.component';
// import { ContactComponent } from './components/custom/contact/contact.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { SectionOneComponent } from './components/test/section-one/section-one.component';
// import { SectionTwoComponent } from './components/test/section-two/section-two.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { animation: 'HomePage'} },
  { path: 'gallery', component: GalleryComponent, data: { animation: 'GalleryPage' } },
  // { path: 'contact', component: ContactComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'one', component: SectionOneComponent, data: { animation: 'SectionOne'} },
  // { path: 'two', component: SectionTwoComponent, data: { animation: 'SectionTwo'} }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
