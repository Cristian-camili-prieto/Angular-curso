import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador.componet';


@NgModule({
    declarations:[
        ContadorComponent
    ],

    exports:[
        ContadorComponent
    ]
})

export class ContadorModule{}