import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registro-de-usuario',
    loadChildren: () => import('./paginas/registro-de-usuario/registro-de-usuario.module').then( m => m.RegistroDeUsuarioPageModule)
  },
  {
    path: 'registro-de-egresos',
    loadChildren: () => import('./paginas/registro-de-egresos/registro-de-egresos.module').then( m => m.RegistroDeEgresosPageModule)
  },
  {
    path: 'listar-usuarios',
    loadChildren: () => import('./paginas/listar-usuarios/listar-usuarios.module').then( m => m.ListarUsuariosPageModule)
  },
  {
    path: 'listar-egresos',
    loadChildren: () => import('./paginas/listar-egresos/listar-egresos.module').then( m => m.ListarEgresosPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
