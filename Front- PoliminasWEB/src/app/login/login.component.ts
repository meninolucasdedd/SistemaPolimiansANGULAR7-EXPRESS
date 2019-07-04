import { Component, OnInit, } from '@angular/core';
import { AutenticacaoService } from '../services/autenticacao-service/autenticacao.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;

  usuario: Usuario = new Usuario();
  constructor(private autenticacaoService: AutenticacaoService,
              private toasty: ToastrService) {

  }

  ngOnInit() {
    if(this.autenticacaoService.getusuarioLogadoValue()){
      this.usuario = this.autenticacaoService.getusuarioLogadoValue();
    }
  }


  onSubmit(loginForm: NgForm) {
    console.log(this.usuario.email, this.usuario.senha)
    
    if(loginForm.invalid){
      this.toasty.error("Todos os campos são obrigatórios.");
      return;
    }
    this.autenticacaoService.login(this.usuario.email, this.usuario.senha);
  }


}
