import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargaImagenComponent } from './components/carga-imagen/carga-imagen.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  { path: 'menu', component:  MenuComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'cargaImagen', component: CargaImagenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
