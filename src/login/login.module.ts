import { NgModule } from "@angular/core";
import { LoginComponent} from './login.component'
import { NzInputModule, NzButtonModule } from "ng-zorro-antd"

@NgModule({
    imports: [NzInputModule, NzButtonModule],
    declarations: [LoginComponent]
})

export class LoginModule{}