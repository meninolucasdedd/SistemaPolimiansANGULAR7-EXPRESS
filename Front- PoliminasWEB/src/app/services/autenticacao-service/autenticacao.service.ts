import { Injectable, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from '../usuario-service/usuario.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {



  private usuarioLogadoSubject:BehaviorSubject<Usuario>;
  public usuarioLogadoObservavel: Observable<Usuario>;

  

  constructor(private usuarioService:UsuarioService,
              private router:Router,
              private toasty:ToastrService) {

    this.usuarioLogadoSubject = new BehaviorSubject<Usuario>(JSON.parse(sessionStorage.getItem("user_login")));
    this.usuarioLogadoObservavel = this.usuarioLogadoSubject.asObservable();
  }

  login(email:string, senha:string){
    this.usuarioService.login(email,senha).subscribe( (res:Usuario)=>{
        console.log(res);
        if(res!=null){
          sessionStorage.setItem("user_login",JSON.stringify(res));
          localStorage.setItem("access_token",res.token);
          sessionStorage.setItem("companhiaId",JSON.stringify(res.companhiaId));
          sessionStorage.setItem("espectadorId",JSON.stringify(res.espectadorId));
          this.usuarioLogadoSubject.next(res);
          location.assign("explore");
        }else{
          this.toasty.error("Usuário ou senha inválida") 
        }
      }
    );
  }
  
  getusuarioLogadoValue():Usuario{
    let res = JSON.parse(sessionStorage.getItem("user_login"));
    return res;
  }

  getcompanhiaLogadaId():string{
    let res = JSON.parse(sessionStorage.getItem("companhiaId"));
    return res;
  }

  getespectadorLogadaId():string{
    let res = JSON.parse(sessionStorage.getItem("espectadorId"));
    return res;
  }


  logout(){
    sessionStorage.removeItem("user_login");
    sessionStorage.removeItem("companhiaId");
    sessionStorage.removeItem("espectadorId");

    localStorage.removeItem("access_token");
    this.usuarioLogadoSubject.next(null);
    this.router.navigate([""]);
  }

}
