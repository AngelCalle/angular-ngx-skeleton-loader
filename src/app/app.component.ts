import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  contentLoaded: boolean = false;

  constructor() {
    setTimeout(() => {
      this.contentLoaded = true;
    }, 2000);
  }
}
