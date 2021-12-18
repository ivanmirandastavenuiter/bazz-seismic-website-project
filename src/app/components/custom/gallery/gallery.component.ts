import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  @ViewChild('darkOverlay') darkOverlay!: ElementRef;
  @ViewChild('darkOverlayUpperGap') darkOverlayUpperGap!: ElementRef;
  @ViewChild('zoomedImage') zoomedImage!: ElementRef;
  @ViewChild('zoomedImageContainer') zoomedImageContainer!: ElementRef;
  @ViewChild('mainContainer') mainContainer!: ElementRef;

  @HostListener('window:keydown.escape', ['$event'])
  handleEscapeKeyDown(event: KeyboardEvent) {
    this.closeZoomedImage();
  }

  title: string = 'Gallery';
  previousPage: string = '/home';
  nextPage: string = '/music';

  imageSetOne: any = {
    0: '/assets/imgs/img-1.jpg',
    1: '/assets/imgs/img-2.jpg',
    2: '/assets/imgs/img-15.jpg'
  };

  imageSetTwo: any = {
    0: '/assets/imgs/img-5.jpg',
    1: '/assets/imgs/img-6.jpg',
    2: '/assets/imgs/img-7.jpg',
    3: '/assets/imgs/img-12.jpg'
  }

  imageSetThree: any = {
    0: '/assets/imgs/img-9.jpg',
    1: '/assets/imgs/img-10.jpg',
    2: '/assets/imgs/img-11.jpg',
    3: '/assets/imgs/img-8.jpg'
  }

  imageSetFour: any = {
    0: '/assets/imgs/img-13.jpg',
    1: '/assets/imgs/img-14.jpg',
    2: '/assets/imgs/img-4.jpg'
  }

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  public getImageSetOne() {
    return Object.keys(this.imageSetOne);
  }

  public getImageSetTwo() {
    return Object.keys(this.imageSetTwo);
  }

  public getImageSetThree() {
    return Object.keys(this.imageSetThree);
  }

  public getImageSetFour() {
    return Object.keys(this.imageSetFour);
  }

  public show(url: string) {
    // First set the img tag src attribute, so we assure image url is set
    this.renderer.setAttribute(this.zoomedImage.nativeElement, 'src', url);

    // Get the img height to select display flex or block (behaves different)
    const imgHeight = this.zoomedImage.nativeElement.height;

    // Second, set dark overlay for background
    this.renderer.addClass(this.darkOverlay.nativeElement, 'show');
    this.renderer.addClass(this.darkOverlayUpperGap.nativeElement, 'show');

    // Last, we show the container that is hidden for zoomed image
    this.renderer.addClass(this.zoomedImageContainer.nativeElement, imgHeight >= 600 ? 'show-with-block' : 'show-with-flex' );

    // One last thing else: set main container z-index to 1, so footer is on background
    this.renderer.addClass(this.mainContainer.nativeElement, 'overlap-on-footer');
  }

  private closeZoomedImage() {
    // It'd be just a matter of removing the 'show' class added on click
    this.renderer.removeClass(this.darkOverlay.nativeElement, 'show');
    this.renderer.removeClass(this.darkOverlayUpperGap.nativeElement, 'show');
    this.renderer.removeClass(this.zoomedImageContainer.nativeElement, 'show-with-flex');
    this.renderer.removeClass(this.zoomedImageContainer.nativeElement, 'show-with-block');

    // And restore 0 z-index for main container
    this.renderer.removeClass(this.mainContainer.nativeElement, 'overlap-on-footer');
  }

  public closeImageOnCrossClick() {
    this.closeZoomedImage();
  }



}
