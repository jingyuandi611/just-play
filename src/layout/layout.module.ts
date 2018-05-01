import { NgModule } from "@angular/core/src/metadata/ng_module";
import { LayoutCompomemt } from './layout.component'
import { NzMenuModule } from 'ng-zorro-antd';

@NgModule({
    imports: [
        LayoutCompomemt,
        NzMenuModule
    ],
    declarations: [LayoutCompomemt]
})

export class LayoutModule{}