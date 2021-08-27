import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedChild: string = 'Home';

  constructor() {}

  onActivate(componentRef: any) {
    this.selectedChild = componentRef.title;
  }


}
