import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/custom/home/home.component';
import { GalleryComponent } from './components/custom/gallery/gallery.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './components/custom/contact/contact.component';
import { MusicComponent } from './components/custom/music/music.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { animation: 'HomePage'} },
  { path: 'gallery', component: GalleryComponent, data: { animation: 'GalleryPage' } },
  { path: 'contact', component: ContactComponent },
  { path: 'music', component: MusicComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
