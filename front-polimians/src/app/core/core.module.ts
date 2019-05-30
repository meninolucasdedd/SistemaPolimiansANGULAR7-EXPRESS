import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { LoginComponent} from './login/login.component';
@NgModule({
  declarations: [RegistroUsuarioComponent, LoginComponent],
  imports: [
    CommonModule
  ],
  exports: [RegistroUsuarioComponent, LoginComponent]
})

export class CoreModule { }
