import { Component, OnInit, ViewChild } from '@angular/core';
import { Player } from '@vime/angular';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  // Obtain a ref if you need to call any methods.
  @ViewChild('player') player!: Player;
  @ViewChild('source') audio!: any;
  @ViewChild('musicbackground') container!: any;

  title: string = 'Music';
  songPlayed: number = 0;
  songs: any = {
    0: {
      artist: 'Tester',
      title: 'Test OnE',
      songUrl: 'assets/tracks/test-one.aac',
      imageUrl: 'assets/imgs/song-background.jpg',
      album: 'Testest Hits'
    },
    1: {
      artist: 'Tester',
      title: 'Test tWo',
      songUrl: 'assets/tracks/test-two.aac',
      imageUrl: 'assets/imgs/hey-1.jpg',
      album: 'Testest Hits'
    },
    2: {
      artist: 'Tester',
      title: 'EHH VOL.2',
      songUrl: 'assets/tracks/test-three.aac',
      imageUrl: 'assets/imgs/hey-2.jpg',
      album: 'Testest Hits'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  onPlaybackReady() {
    // ...
  }

  async onPreviousClick() {
    if (this.songPlayed === 0) {
      this.songPlayed = Object.keys(this.songs).length - 1;
    } else {
      this.songPlayed--;
    }
    await this.player.pause();
    const audioElement = <HTMLSourceElement>this.audio.nativeElement;
    const vmFile = audioElement.parentElement as HTMLAudioElement;
    vmFile.src = this.songs[this.songPlayed].songUrl;
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
    vmFile.src = this.songs[this.songPlayed].songUrl;
    await this.player.play();
  }

}
