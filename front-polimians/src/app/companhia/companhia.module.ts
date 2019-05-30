import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilPageComponent } from './perfil-page/perfil-page.component';
import { ApresentacaoModule } from './apresentacao/apresentacao.module';
import { WorkshopModule } from './workshop/workshop.module';

@NgModule({
  declarations: [PerfilPageComponent],
  imports: [
    CommonModule, ApresentacaoModule, WorkshopModule
  ],
  exports: [PerfilPageComponent]
})
export class CompanhiaModule { }
