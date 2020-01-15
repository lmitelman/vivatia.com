import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar los componentes que se generen
import { ProductoCaptikaComponent } from './navigation/productos/producto-captika/producto-captika.component';
import { ProductoThubanComponent } from './navigation/productos/producto-thuban/producto-thuban.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './navigation/nosotros/nosotros.component';
import { SolucionesComponent } from './navigation/soluciones/soluciones.component';
import { BancaComponent } from './navigation/soluciones/banca/banca.component';
import { SegurosComponent } from './navigation/soluciones/seguros/seguros.component';
import { ProductosComponent } from './navigation/productos/productos.component';
import { SaludComponent } from './navigation/soluciones/salud/salud.component';
import { IndustriaComponent } from './navigation/soluciones/industria/industria.component';
import { GobiernoComponent } from './navigation/soluciones/gobierno/gobierno.component';
import { EducacionComponent } from './navigation/soluciones/educacion/educacion.component';


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
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

// useHash: true PARA PODER ARREGLAR LA PAGINACIÓN AL RECARGAR
// scrollPositionRestoration: 'enabled' PARA SCROLLEAR AL TOP AL NAVEGAR ENTRE COMPONENTES


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
