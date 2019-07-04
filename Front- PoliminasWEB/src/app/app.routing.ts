import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile-company/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ExplorePageComponent } from './explore-page/explore-page.component';
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';
import { CategorySelectComponent } from './category-select/category-select.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import {WorkshopRegistrationComponent} from './workshop-registration/workshop-registration.component';
import {WorkshopViewComponent} from './workshop-view/workshop-view.component';
import { GuardaService } from './services/autenticacao-service/guarda.service';
import { PageErrorComponent } from './page-error/page-error.component';
import { CadastroEspetaculoComponent } from './cadastro-espetaculo/cadastro-espetaculo.component';

import { PecaViewComponent } from './peca-view/peca-view.component';
import { EditProfileUserComponent } from './edit-profile-user/edit-profile-user.component';
import { EditProfileCompanyComponent } from './edit-profile-company/edit-profile-company.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { WorkshopInscritoComponent } from './workshop-inscrito/workshop-inscrito.component';



const routes: Routes =[
    { 
      path: 'galeria-padrao',             
      component: HomeComponent, canActivate: [GuardaService]
    },
    {
      path: 'seleciona-categoria',
      component: CategorySelectComponent
    },
    {
      path: 'perfil-usuario',
      component: ProfileUserComponent, canActivate: [GuardaService]
    },
    { 
      path: 'perfil-companhia',     
      component: ProfileComponent, canActivate: [GuardaService]
    },
    {
      path: 'editar-pefil-usuario',
      component: EditProfileUserComponent,
    },
    {
      path: 'editar-perfil-companhia',
      component: EditProfileCompanyComponent,
    },
    { path: 'cadastro',           
      component: SignupComponent 
    },
    { 
      path: 'landing',          
      component: LandingComponent 
    },
    { 
      path: 'entrar',          
      component: LoginComponent 
    },
    {
      path: 'explore',         
      component: ExplorePageComponent,
      
    },
    {
      path: 'cadastro-compainha',
      component: CompanyRegistrationComponent,
    },
   
    {
      path: 'page-error',
      component: PageErrorComponent
    },
    {
      path: 'novo-workshop',
      component: WorkshopRegistrationComponent, canActivate: [GuardaService]
    },
    {
      path: 'novo-espetaculo',
      component: CadastroEspetaculoComponent, 
    },
    {
      path: 'workshop-detalhe/:id',
      component: WorkshopViewComponent
    },
    {
      path: 'comentarios',
      component:  CommentSectionComponent,
    },
    {
      path: 'espetaculo-detalhe/:id',
      component: PecaViewComponent
    },
    {
      path: 'workshop-inscrito',
      component: WorkshopInscritoComponent,
    }, 
    {
    path: '*',
    redirectTo: 'page-error',
    pathMatch: 'full'
    },
    
  { 
    path: '', 
    redirectTo: 'landing', 
    pathMatch: 'full' 
  } 
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  
 }
