import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar los componentes que se generen

// Producto
import { ProductoCaptikaComponent } from './navigation/productos/producto-captika/producto-captika.component';
import { ProductoThubanComponent } from './navigation/productos/producto-thuban/producto-thuban.component';

// Home
import { HomeComponent } from './home/home.component';

// Nosotros
import { NosotrosComponent } from './navigation/nosotros/nosotros.component';

// Soluciones
import { SolucionesComponent } from './navigation/soluciones/soluciones.component';
import { BancaComponent } from './navigation/soluciones/industrias/banca/banca.component';
import { SegurosComponent } from './navigation/soluciones/industrias/seguros/seguros.component';
import { ProductosComponent } from './navigation/productos/productos.component';
import { SaludComponent } from './navigation/soluciones/industrias/salud/salud.component';
import { IndustriaComponent } from './navigation/soluciones/industrias/industria/industria.component';
import { GobiernoComponent } from './navigation/soluciones/industrias/gobierno/gobierno.component';
import { EducacionComponent } from './navigation/soluciones/industrias/educacion/educacion.component';
import { CuentasPagarComponent } from './navigation/soluciones/soluciones-horizontales/cuentas-pagar/cuentas-pagar.component';
import { LegajosDigitalesComponent } from './navigation/soluciones/soluciones-horizontales/legajos-digitales/legajos-digitales.component';
import { ContratosComponent } from './navigation/soluciones/soluciones-horizontales/contratos/contratos.component';
import { RecursosHumanosComponent } from './navigation/soluciones/soluciones-horizontales/recursos-humanos/recursos-humanos.component';
import { PartnersComponent } from './navigation/partners/partners.component';
import { OnboardingComponent } from './navigation/soluciones/soluciones-horizontales/onboarding/onboarding.component';
import { ComprasComponent } from './navigation/soluciones/soluciones-horizontales/compras/compras.component';
import { FirmaDigitalComponent } from './navigation/soluciones/soluciones-horizontales/firma-digital/firma-digital.component';
import { DigitalizacionComponent } from './navigation/soluciones/soluciones-horizontales/digitalizacion/digitalizacion.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'thuban', component: ProductoThubanComponent},
  {path: 'captika', component: ProductoCaptikaComponent},
  {path: 'soluciones', component: SolucionesComponent},
  {path: 'banca', component: BancaComponent},
  {path: 'seguros', component: SegurosComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'salud', component: SaludComponent},
  {path: 'industria', component: IndustriaComponent},
  {path: 'gobierno', component: GobiernoComponent},
  {path: 'educacion', component: EducacionComponent},
  {path: 'cuentas-a-pagar', component: CuentasPagarComponent},
  {path: 'legajos-digitales', component: LegajosDigitalesComponent},
  {path: 'contratos', component: ContratosComponent},
  {path: 'recursos-humanos', component: RecursosHumanosComponent},
  {path: 'onboarding', component: OnboardingComponent},
  {path: 'compras', component: ComprasComponent},
  {path: 'partners', component: PartnersComponent},
  {path: 'firma-digital', component: FirmaDigitalComponent},
  {path: 'digitalizacion', component: DigitalizacionComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

// useHash: true PARA PODER ARREGLAR LA PAGINACIÓN AL RECARGAR
// scrollPositionRestoration: 'enabled' PARA SCROLLEAR AL TOP AL NAVEGAR ENTRE COMPONENTES


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
