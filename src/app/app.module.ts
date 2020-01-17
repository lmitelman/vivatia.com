//angular stuff
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdminService } from './services/admin.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';

// Ng-Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// MDB Angular
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// Texto que se escribe y se borra
// https://github.com/thevladeffect/ngx-typed-js
import { NgxTypedJsModule } from 'ngx-typed-js';

//ngx-translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'

//modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

//componentes
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './navigation/nosotros/nosotros.component';
import { SolucionesComponent } from './navigation/soluciones/soluciones.component';
import { DialogContactComponent } from './dialog-contact/dialog-contact.component';
import { DialogSolutionsComponent } from './navigation/soluciones/dialog-solutions/dialog-solutions.component';
import { ProductoThubanComponent } from './navigation/productos/producto-thuban/producto-thuban.component';
import { ProductoCaptikaComponent } from './navigation/productos/producto-captika/producto-captika.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { CountoModule } from 'angular2-counto';
import { BancaComponent } from './navigation/soluciones/industrias/banca/banca.component';
import { SolucionesHorizontalesComponent } from './navigation/soluciones/soluciones-horizontales/soluciones-horizontales.component';
import { SegurosComponent } from './navigation/soluciones/industrias/seguros/seguros.component';
import { ProductosComponent } from './navigation/productos/productos.component';
import { SaludComponent } from './navigation/soluciones/industrias/salud/salud.component';
import { IndustriaComponent } from './navigation/soluciones/industrias/industria/industria.component';
import { GobiernoComponent } from './navigation/soluciones/industrias/gobierno/gobierno.component';
import { EducacionComponent } from './navigation/soluciones/industrias/educacion/educacion.component';
import { SolucionesModalComponent } from './navigation/soluciones/soluciones-modal/soluciones-modal.component';
import { ReciboSueldoComponent } from './navigation/soluciones/soluciones-horizontales/recibo-sueldo/recibo-sueldo.component';
import { CuentasPagarComponent } from './navigation/soluciones/soluciones-horizontales/cuentas-pagar/cuentas-pagar.component';


// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
  },
};

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent,
    SolucionesComponent,
    DialogContactComponent,
    DialogSolutionsComponent,
    ProductoThubanComponent,
    ProductoCaptikaComponent,
    DropdownComponent,
    MenuComponent,
    BancaComponent,
    SolucionesHorizontalesComponent,
    SegurosComponent,
    ProductosComponent,
    SaludComponent,
    IndustriaComponent,
    GobiernoComponent,
    EducacionComponent,
    SolucionesModalComponent,
    ReciboSueldoComponent,
    CuentasPagarComponent
  ],
  entryComponents: [DialogContactComponent, DialogSolutionsComponent, SolucionesModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    MatIconModule,
    MatInputModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    NgbModule,
    MDBBootstrapModule,
    MatExpansionModule,
    CountoModule,
    NgxTypedJsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AppRoutingModule
  ],
  providers: [
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
