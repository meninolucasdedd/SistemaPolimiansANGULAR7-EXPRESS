import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { GlossarioModule } from './glossario/glossario.module';
import { PaginaHomeComponent } from './pagina-home/pagina-home.component';
import { CoreModule } from './core/core.module';
import { UiModule } from './ui/ui.module';
import { CompanhiaModule } from './companhia/companhia.module';
import { ApresentacaoModule } from './companhia/apresentacao/apresentacao.module';


@NgModule({

  declarations: [
    AppComponent,
    NavbarComponent,
    PaginaHomeComponent,

    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    GlossarioModule,
    CoreModule,
    UiModule,
    CompanhiaModule,
   ApresentacaoModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
