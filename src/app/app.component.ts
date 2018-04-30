import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router/src/router';
// import { AppRouterModule } from './app.root';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [Router]
})
export class AppComponent {
  title = 'app';
  clickToLogin() {
    
  }
  ngOnInit():void {

  }
}
