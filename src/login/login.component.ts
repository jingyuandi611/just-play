import {Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent{

    constructor(private router: Router) { }

    win:any = window;

    clickToLogin() {
        this.router.navigate(['layout']);
        this.win.sessionStorage.setItem("login", "1");
    }

}