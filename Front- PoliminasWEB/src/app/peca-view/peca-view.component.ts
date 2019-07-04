import { Component, OnInit } from '@angular/core';

import { Espetaculo } from '../models/espetaculo.model';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EspetaculoService } from '../services/espetaculo-service/espetaculo-service.service';
import { AutenticacaoService } from '../services/autenticacao-service/autenticacao.service';


@Component({
  selector: 'app-peca-view',
  templateUrl: './peca-view.component.html',
  styleUrls: ['./peca-view.component.css']
})

export class PecaViewComponent implements OnInit {
  espetaculo: Espetaculo;
  constructor( private activatedRoute: ActivatedRoute,
               private espetaculoService: EspetaculoService,
               private autenticacaoService: AutenticacaoService) {

              this.espetaculo = new Espetaculo();
            }
  
  ngOnInit() {
    console.log( this.activatedRoute.snapshot.params["id"])
    let id = this.activatedRoute.snapshot.params["id"];

    this.espetaculoService.retrieveById(id).subscribe(
      (res:Espetaculo)=>{
        this.espetaculo = res;        
      }
    )
  }

  realizarInscricao(){
    this.espetaculo.qtdParticipantes = this.autenticacaoService.getusuarioLogadoValue()._id;
    console.log(this.espetaculo.qtdParticipantes);
  }

}
