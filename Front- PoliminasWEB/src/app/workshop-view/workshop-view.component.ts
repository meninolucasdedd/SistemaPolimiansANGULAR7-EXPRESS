import { Component, OnInit } from '@angular/core';
import { Workshop } from '../models/workshop.model';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


import { WorkshopService } from '../services/workshop-service/workshop.service';
import { AutenticacaoService } from '../services/autenticacao-service/autenticacao.service';

@Component({
  selector: 'app-workshop-view',
  templateUrl: './workshop-view.component.html',
  styleUrls: ['./workshop-view.component.css']
})
export class WorkshopViewComponent implements OnInit {
  
  workshop: Workshop;

  constructor(
    private activatedRoute: ActivatedRoute,
    private workshopService: WorkshopService,
    private autenticacaoService: AutenticacaoService) {
      
    this.workshop = new Workshop();
  }

  ngOnInit() {
    console.log( this.activatedRoute.snapshot.params["id"])
    let id = this.activatedRoute.snapshot.params["id"];
    this.workshopService.retrieveById(id).subscribe(
      (res: Workshop) => {
        console.log(res);
        this.workshop = res;
      }
    );
  }

  realizarInscricao(){
    this.workshop.participantes = this.autenticacaoService.getusuarioLogadoValue()._id;
    console.log(this.workshop.participantes);
  }

}
