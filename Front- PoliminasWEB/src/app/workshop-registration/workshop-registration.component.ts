
import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../services/autenticacao-service/autenticacao.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Espectador } from '../models/espectador.model';
import { Usuario } from '../models/usuario.model';
import { Companhia } from '../models/companhia.model';
import { Workshop } from '../models/workshop.model';
import { CompanhiaService } from '../services/companhia-service/companhia.service';
import { WorkshopService } from '../services/workshop-service/workshop.service';
import { UploadService } from '../services/upload-service/upload.service';

@Component({
  selector: 'app-workshop-registration',
  templateUrl: './workshop-registration.component.html',
  styleUrls: ['./workshop-registration.component.css']
})
export class WorkshopRegistrationComponent implements OnInit {
  focus;
  focus1;
  img: File;

  usuario: Usuario = new Usuario();
  companhia: Companhia = new Companhia();
  workshop: Workshop = new Workshop();

  constructor(private autenticacaoService: AutenticacaoService,
              private companhiaService: CompanhiaService,
              private workshopService: WorkshopService,
              private toasty: ToastrService,
              private uploadService: UploadService) {

  }

  ngOnInit() {
    if(this.autenticacaoService.getusuarioLogadoValue()){
      this.usuario = this.autenticacaoService.getusuarioLogadoValue();
      this.companhiaService.retrieveById(this.autenticacaoService.getcompanhiaLogadaId()).subscribe(
        (res:Companhia)=>{

          this.companhia = res;
        }
      )
      
    }
  }


  onSubmit(loginForm: NgForm) {

    if(loginForm.invalid){
      this.toasty.error("Todos os campos são obrigatórios.");
      return;
    }
    this.upload();

    this.workshopService.register(this.workshop).subscribe(
      (res:Workshop)=>{
        this.companhia.workshops.push(res._id);
        console.log(res._id);
        console.log(this.companhia.workshops);
        this.companhiaService.update(this.companhia).subscribe(
          (re)=>{
            console.log("ok");
            location.assign(`workshop-detalhe/${res._id}`);
          }
        );
      }
    );
    
   
  }

  upload(){
/*     this.img;
    console.log("Imagem nome -> "+this.img.name);
     this.uploadService.update(this.img).subscribe(
      (res:File)=>{
        console.log(res.size);
      }
    ); */
    
  } 


}
