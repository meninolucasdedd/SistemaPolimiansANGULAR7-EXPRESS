import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario.model';
import { SignupService } from '../services/signup-service/signup.service';
import { Router } from '@angular/router';
import { Espectador } from '../models/espectador.model';
import { EspectadorService } from '../services/espectador-service/espectador.service';
import { BehaviorSubject } from 'rxjs';
import { Companhia } from '../models/companhia.model';
import { CompanhiaService } from '../services/companhia-service/companhia.service';
import { AutenticacaoService } from '../services/autenticacao-service/autenticacao.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
 /*  focus;
  focus1;
  focus2;
 */
  usuario: Usuario;
  espectador: Espectador;
  companhia: Companhia;
  tipoConta: string;

  private usuarioLogadoSubject: BehaviorSubject<Usuario>



  constructor(private singupService: SignupService,
    private espectadorService: EspectadorService,
    private companhiaService: CompanhiaService,
    private  autenticacaoService: AutenticacaoService,
    private toasty: ToastrService ) {

    this.usuarioLogadoSubject = new BehaviorSubject<Usuario>(JSON.parse(sessionStorage.getItem("user_login")));
    this.usuario = new Usuario();
    this.espectador = new Espectador();
    this.companhia = new Companhia();
  }

  onSubmit(registerForm: NgForm) {
    
     if (registerForm.invalid) {
      this.toasty.error("Você precisa preencher todos os campos");
      return;
    } 
      this.singupService.register(this.usuario).subscribe(
      (res: Usuario) => {
        if (res != null) {
          sessionStorage.setItem("user_login", JSON.stringify(res));
          localStorage.setItem("access_token", res.token);
          this.usuarioLogadoSubject.next(res);

          if(this.tipoConta == "espectador"){
            this.registerEspec(res);
          }
          else if(this.tipoConta == "companhia"){
            this.registerComp(res);
          }
        } else {
          this.toasty.error("Usuário Inválido, reveja as infromações inseridas.");
        }
      },
      (error: any) => {
        console.log(error);
      }
    );

  }

private registerComp(user: Usuario){
  
  this.companhia.usuarioId = user._id;
  console.log(this.companhia);
  
  this.companhiaService.register(this.companhia).subscribe(
   (res:Companhia) => {
    if (res != null) {
      user.companhiaId = res._id;
      this.singupService.update(user).subscribe(
        (up:Usuario)=>{
          console.log(`update ${res} Adicionado!`);
        }
      );
      console.log(`Companhia ${res._id} Adicionada!`);
      this.toasty.success(`Parabéns, seu cadastro foi realizado com sucesso.`);

      this.autenticacaoService.login(this.usuario.email, this.usuario.senha);
    } else {
      this.toasty.error("001")
    }
    },(error: any) => {
      console.log(error);
    }
  );
}

 private registerEspec(user: Usuario) {
   this.espectador.usuarioId = user._id;
    this.espectadorService.register(this.espectador).subscribe(
      (res: Espectador) => {
        if (res != null) {
          user.espectadorId = res._id;
          this.singupService.update(user).subscribe(
            (up:Usuario)=>{
              console.log(`update ${res} Adicionado!`);
            }
          );
          console.log(`Espectador ${res._id} Adicionado!`);
          this.toasty.success(`Parabéns, seu cadastro foi realizado com sucesso.`);
          this.autenticacaoService.login(this.usuario.email, this.usuario.senha);
        } else {
          this.toasty.error("001")
        }

      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
