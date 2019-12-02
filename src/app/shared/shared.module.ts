import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';


@NgModule({

    imports: [

        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MaterialModule,
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,

    ],
    entryComponents: [

    ],
})
export class SharedModule { }
