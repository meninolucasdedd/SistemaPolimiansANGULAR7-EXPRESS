import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarPageComponent } from './cadastrar-page/cadastrar-page.component';
import { PrincipalPageComponent } from './principal-page/principal-page.component';

@NgModule({
  declarations: [CadastrarPageComponent, PrincipalPageComponent],
  imports: [
    CommonModule
  ],
  exports: [CadastrarPageComponent, PrincipalPageComponent]
})
export class WorkshopModule { }
