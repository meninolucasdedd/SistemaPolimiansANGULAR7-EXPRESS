import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { AutenticacaoService } from '../services/autenticacao-service/autenticacao.service';
import { Espectador } from '../models/espectador.model';
import {EspectadorService} from '../services/espectador-service/espectador.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {

  usuario = new Usuario()
  espectador = new Espectador();
  constructor(private autenticacaoService: AutenticacaoService, 
              private espectadorService: EspectadorService) { 

  }

  ngOnInit() {
    this.usuario = this.autenticacaoService.getusuarioLogadoValue();
    this.espectadorService.retrieveById(this.usuario.espectadorId).subscribe(
      (res:Espectador)=>{
        this.espectador = res;
      }
    );
  }

}
