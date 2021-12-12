import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  @ViewChild('darkOverlay') darkOverlay!: ElementRef;

  title: string = 'Gallery';
  previousPage: string = '/home';
  nextPage: string = '/music';

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log(this.darkOverlay.nativeElement);
    console.log(this.renderer.selectRootElement(this.darkOverlay.nativeElement));
  }

}
