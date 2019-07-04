import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { Companhia } from '../models/companhia.model';
import { AutenticacaoService } from '../services/autenticacao-service/autenticacao.service';
import { CompanhiaService } from '../services/companhia-service/companhia.service';
import { Workshop } from '../models/workshop.model';
import { WorkshopService } from '../services/workshop-service/workshop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  usuario = new Usuario()
  companhia = new Companhia();
  workshops: Workshop[] = [];

  constructor(private autenticacaoService: AutenticacaoService,
    private companhiaService: CompanhiaService,
    private workshopService: WorkshopService,
    private router:Router) {

  }

  ngOnInit() {
    this.workshopService.list().subscribe(
      (res: Workshop[]) => {
        this.workshops = res;
      }
    )
    this.usuario = this.autenticacaoService.getusuarioLogadoValue();
    this.companhiaService.retrieveById(this.usuario.companhiaId).subscribe(
      (res: Companhia) => {
        this.companhia = res;
      }
    );
  }

  workDetalhe(id:string){
    this.router.navigate(['workshop-detalhe/',id])
  }
}
