//angular stuff
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { ProductoThubanComponent } from './navigation/productos/producto-thuban/producto-thuban.component';
import { ProductoCaptikaComponent } from './navigation/productos/producto-captika/producto-captika.component';
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
import { CuentasPagarComponent } from './navigation/soluciones/soluciones-horizontales/cuentas-pagar/cuentas-pagar.component';
import { SumateComponent } from './navigation/soluciones/sumate/sumate.component';
import { LegajosDigitalesComponent } from './navigation/soluciones/soluciones-horizontales/legajos-digitales/legajos-digitales.component';
import { ContratosComponent } from './navigation/soluciones/soluciones-horizontales/contratos/contratos.component';
import { PersonalizacionComponent } from './navigation/soluciones/industrias/personalizacion/personalizacion.component';
import { RecursosHumanosComponent } from './navigation/soluciones/soluciones-horizontales/recursos-humanos/recursos-humanos.component';
import { PartnersComponent } from './navigation/partners/partners.component';
import { OnboardingComponent } from './navigation/soluciones/soluciones-horizontales/onboarding/onboarding.component';
import { ComprasComponent } from './navigation/soluciones/soluciones-horizontales/compras/compras.component';
import { FirmaDigitalComponent } from './navigation/soluciones/soluciones-horizontales/firma-digital/firma-digital.component';
import { DigitalizacionComponent } from './navigation/soluciones/soluciones-horizontales/digitalizacion/digitalizacion.component';
import { RetailComponent } from './navigation/soluciones/industrias/retail/retail.component';
import { ServiciosComponent } from './navigation/soluciones/industrias/servicios/servicios.component';
import { CapacitacionComponent } from './navigation/capacitacion/capacitacion.component';
import { CrossComponent } from './navigation/soluciones/industrias/cross/cross.component';
import { DialogSumateComponent } from './navigation/soluciones/sumate/dialog-sumate/dialog-sumate.component';
import { DialogPartnersComponent } from './navigation/partners/dialog-partners/dialog-partners.component';
import { RecaptchaModule } from 'ng-recaptcha';


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
    ProductoThubanComponent,
    ProductoCaptikaComponent,
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
    CuentasPagarComponent,
    SumateComponent,
    LegajosDigitalesComponent,
    ContratosComponent,
    PersonalizacionComponent,
    RecursosHumanosComponent,
    PartnersComponent,
    OnboardingComponent,
    ComprasComponent,
    FirmaDigitalComponent,
    DigitalizacionComponent,
    RetailComponent,
    ServiciosComponent,
    CapacitacionComponent,
    CrossComponent,
    DialogSumateComponent,
    DialogPartnersComponent,
  ],
  entryComponents: [DialogContactComponent, SolucionesModalComponent, DialogSumateComponent, DialogPartnersComponent],
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
    RecaptchaModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
