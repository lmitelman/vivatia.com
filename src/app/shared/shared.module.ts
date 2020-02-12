import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from'@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
    let trans = new TranslateHttpLoader(http, '../assets/i18n/', '.json');
    return trans;
};

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MaterialModule,
        TranslateModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        TranslateModule,
    ],
    entryComponents: [
    ],
})
export class SharedModule { }
