import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'june-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})

export class LayoutCompomemt{

    constructor( private router: Router) {};

    win:any = window;

    isLoginAgain() {
        let self = this;
        let status = self.win.sessionStorage.getItem('login');
        if(status != '1') self.router.navigate(['']);
        else return;
    }

    ngOnInit():void {
        this.isLoginAgain();
        setTimeout(() => {
            this.win.sessionStorage.setItem('login','0');
        }, 30*60*1000);
    }
 }

