import { Component, Input, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private _currentSection: string = '';

  @Input()
  set currentSection(currentSection: string) {
    this._currentSection = currentSection;
  }
  get currentSection() { return this._currentSection };
  
  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

}
