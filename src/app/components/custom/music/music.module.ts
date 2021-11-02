import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VimeModule } from '@vime/angular';
import { MusicComponent } from './music.component';

@NgModule({
  declarations: [
    MusicComponent
  ],
  imports: [
    BrowserModule,
    VimeModule
  ],
  exports: [MusicComponent],
  bootstrap: [MusicComponent]
})
export class MusicModule { }
