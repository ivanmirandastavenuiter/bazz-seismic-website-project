import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Player } from '@vime/angular';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  // Obtain a ref if you need to call any methods.
  @ViewChild('player') player!: Player;
  @ViewChild('source') audio!: any;

  title: string = 'Music';
  songPlayed: number = 0;
  songs: any = {
    0: 'assets/tracks/2pac-changes.mp3',
    1: 'assets/tracks/lp-papercut.mp3',
    2: 'assets/tracks/lp-intheend.mp3'
  }

  constructor(private er: ElementRef) { }

  ngOnInit(): void {
  }

  onPlaybackReady() {
    // ...
  }
  
  // customResolver = (iconName: string) => {
  //   return `assets/${iconName}.svg`;
  // }

  async onPreviousClick() {
    if (this.songPlayed === 0) {
      this.songPlayed = Object.keys(this.songs).length - 1;
    } else {
      this.songPlayed--;
    }
    await this.player.pause();
    const audioElement = <HTMLSourceElement>this.audio.nativeElement;
    const vmFile = audioElement.parentElement as HTMLAudioElement;
    vmFile.src = this.songs[this.songPlayed];
    await this.player.play();
  }

  async onForwardClick() {
    if (this.songPlayed === Object.keys(this.songs).length - 1) {
      this.songPlayed = 0;
    } else {
      this.songPlayed++;
    }
    await this.player.pause();
    const audioElement = <HTMLSourceElement>this.audio.nativeElement;
    const vmFile = audioElement.parentElement as HTMLAudioElement;
    vmFile.src = this.songs[this.songPlayed];
    await this.player.play();
  }

}
