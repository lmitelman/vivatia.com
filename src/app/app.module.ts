//angular stuff
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdminService } from './services/admin.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';

// Ng-Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// MDB Angular
import { MDBBootstrapModule } from 'angular-bootstrap-md';

//modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

//componentes
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './navigation/nosotros/nosotros.component';
import { SolucionesComponent } from './navigation/soluciones/soluciones.component';
import { TrabajaComponent } from './navigation/trabaja/trabaja.component';
import { DialogContactComponent } from './dialog-contact/dialog-contact.component';
import { DialogSolutionsComponent } from './navigation/soluciones/dialog-solutions/dialog-solutions.component';
import { ProductoThubanComponent } from './navigation/producto-thuban/producto-thuban.component';
import { ProductoCaptikaComponent } from './navigation/producto-captika/producto-captika.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { PartnersComponent } from './navigation/partners/partners.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CountoModule }  from 'angular2-counto';



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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent,
    SolucionesComponent,
    TrabajaComponent,
    DialogContactComponent,
    DialogSolutionsComponent,
    ProductoThubanComponent,
    ProductoCaptikaComponent,
    DropdownComponent,
    MenuComponent,
    PartnersComponent,
  ],
  entryComponents: [DialogContactComponent, DialogSolutionsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
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
  ],
  providers: [
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
