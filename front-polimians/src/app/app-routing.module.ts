import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaHomeComponent } from './pagina-home/pagina-home.component';
import { LoginComponent } from './core/login/login.component';
import { RegistroUsuarioComponent } from './core/registro-usuario/registro-usuario.component';

const routes: Routes = [
  { 
    path: 'home', component: PaginaHomeComponent
  },
  { 
    path: 'login', component: LoginComponent
  },
  { 
    path: 'registro', component: RegistroUsuarioComponent
  },
  { 
    path: '', redirectTo: '/home', pathMatch: 'full' 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
