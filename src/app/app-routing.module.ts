import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar los componentes que se generen
import { ProductoCaptikaComponent } from './navigation/producto-captika/producto-captika.component';
import { ProductoThubanComponent } from './navigation/producto-thuban/producto-thuban.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './navigation/nosotros/nosotros.component';
import { SolucionesComponent } from './navigation/soluciones/soluciones.component';
import { TrabajaComponent } from './navigation/trabaja/trabaja.component';
import { PartnersComponent } from './navigation/partners/partners.component';
import { BancaComponent } from './navigation/soluciones/banca/banca.component';
import { SegurosComponent } from './navigation/soluciones/seguros/seguros.component';
import { ProductosComponent } from './navigation/productos/productos.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'Thuban', component: ProductoThubanComponent},
  {path: 'Captika', component: ProductoCaptikaComponent},
  {path: 'soluciones', component: SolucionesComponent},
  {path: 'trabaja', component: TrabajaComponent},
  {path: 'partners', component: PartnersComponent},
  {path: 'banca', component: BancaComponent},
  {path: 'seguros', component: SegurosComponent},
  {path: 'productos', component: ProductosComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
