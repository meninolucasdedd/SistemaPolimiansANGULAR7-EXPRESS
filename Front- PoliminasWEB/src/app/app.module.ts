import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile-company/profile.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { GaleriaDePadroesComponent } from './galeria-de-padroes/galeria-de-padroes.component';
import { ExplorePageComponent } from './explore-page/explore-page.component';
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';
import { CategorySelectComponent } from './category-select/category-select.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { WorkshopRegistrationComponent } from './workshop-registration/workshop-registration.component';
import { AuthInterceptor } from './services/autenticacao-service/auth-interceptor.service';
import { WorkshopViewComponent } from './workshop-view/workshop-view.component';
import { CadastroEspetaculoComponent } from './cadastro-espetaculo/cadastro-espetaculo.component';
import { PecaViewComponent } from './peca-view/peca-view.component';
import { EditProfileUserComponent } from './edit-profile-user/edit-profile-user.component';
import { EditProfileCompanyComponent } from './edit-profile-company/edit-profile-company.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { WorkshopInscritoComponent } from './workshop-inscrito/workshop-inscrito.component';




export let options: Partial<IConfig> | (() => Partial<IConfig>);


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    GaleriaDePadroesComponent,
    ExplorePageComponent,
    CompanyRegistrationComponent,
    CategorySelectComponent,
    ProfileUserComponent,
    PageErrorComponent,
    WorkshopRegistrationComponent,
    WorkshopViewComponent,
    CadastroEspetaculoComponent,
    PecaViewComponent,
    EditProfileUserComponent,
    EditProfileCompanyComponent,
    CommentSectionComponent,
    WorkshopInscritoComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-left'
    }),
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(options),
    Ng2SearchPipeModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
