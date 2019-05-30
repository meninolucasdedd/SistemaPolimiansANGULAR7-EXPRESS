import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnAcaoComponent } from './btn-acao/btn-acao.component';
import { TipografiaComponent } from './tipografia/tipografia.component';
import { PaletaCoresComponent } from './paleta-cores/paleta-cores.component';
import { PageGlossarioComponent } from './page-glossario/page-glossario.component';

@NgModule({
  declarations: [BtnAcaoComponent, TipografiaComponent, PaletaCoresComponent, PageGlossarioComponent],
  imports: [CommonModule],
  exports: [PageGlossarioComponent]
})
export class GlossarioModule { }
