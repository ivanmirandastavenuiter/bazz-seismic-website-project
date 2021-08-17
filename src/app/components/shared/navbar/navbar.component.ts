import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title: string = 'whatever';

  constructor() { 
    console.log('Built')
  }

  ngOnInit(): void {
    console.log('On init');
  }

}
