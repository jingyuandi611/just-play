import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { AppRouterModule } from './app.root';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [Router]
})
export class AppComponent {
  title = 'app';
  
  ngOnInit():void {

  }
}
