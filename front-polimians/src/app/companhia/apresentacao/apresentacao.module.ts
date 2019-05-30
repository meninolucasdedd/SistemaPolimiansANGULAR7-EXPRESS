import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarPageComponent } from './cadastrar-page/cadastrar-page.component';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { MatFormFieldModule, MatChipsModule, MatIconModule} from '@angular/material';

@NgModule({
  declarations: [CadastrarPageComponent, PrincipalPageComponent],
  imports: [
    CommonModule, MatFormFieldModule, MatChipsModule, MatIconModule
  ],
  exports: [CadastrarPageComponent, PrincipalPageComponent, ]
})
export class ApresentacaoModule { }