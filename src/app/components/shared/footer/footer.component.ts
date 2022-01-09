import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnChanges {

  @Input() currentSection!: string;
  previousPage!: string;
  nextPage!: string;

  pages: any = {
    home: {
      previousPage: '/contact',
      nextPage: '/gallery'
    },
    gallery: {
      previousPage: '/home',
      nextPage: '/music'
    },
    music: {
      previousPage: '/gallery',
      nextPage: '/contact'
    },
    contact: {
      previousPage: '/music',
      nextPage: '/home'
    }
  }

  constructor() { 
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.previousPage = this.pages[this.currentSection.toLowerCase()].previousPage;
    this.nextPage = this.pages[this.currentSection.toLowerCase()].nextPage;
  }

}
