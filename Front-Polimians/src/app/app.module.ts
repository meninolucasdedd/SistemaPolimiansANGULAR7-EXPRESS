import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { GlossarioModule } from './glossario/glossario.module';
import { PaginaHomeComponent } from './pagina-home/pagina-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PaginaHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GlossarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
