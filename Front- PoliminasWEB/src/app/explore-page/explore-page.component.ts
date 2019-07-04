import { Component, OnInit } from '@angular/core';
import { Workshop } from '../models/workshop.model';
import { WorkshopService } from '../services/workshop-service/workshop.service';
import { Router } from '@angular/router';
import { Espetaculo } from '../models/espetaculo.model';
import { EspetaculoService } from '../services/espetaculo-service/espetaculo-service.service';
import { Companhia } from '../models/companhia.model';
import { CompanhiaService } from '../services/companhia-service/companhia.service';


@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.css']
})
export class ExplorePageComponent implements OnInit {

  workshops:Workshop[] = [];
  espetaculos: Espetaculo[] = [];
  companhias: Companhia[] = [];
  searchText: string;

  constructor(private  workshopService: WorkshopService,
    private espetaculoService: EspetaculoService,
    private companhiaService: CompanhiaService,
    private router:Router) { }

  ngOnInit() {
   this.workshopList();
   this.espetaculoList();
   this.companhiaList();
  }
  scrollTo(selector) {
    window.scrollTo(0, 260);
}

  workshopList(){
    this.workshopService.list().subscribe(
      (res:Workshop[])=>{
        this.workshops = res;
      }
    );
  }

  companhiaList(){
    this.companhiaService.list().subscribe(
      (res: Companhia[])=>{
        this.companhias =res;

      }
    )
  }



  espetaculoList(){
    this.espetaculoService.list().subscribe(
      (res:Espetaculo[])=>{
        this.espetaculos = res;
      }
    )
  }

  workDetalhe(id:string){
    this.router.navigate(['workshop-detalhe/',id])
  }

  espetDetalhe(id:string){
    this.router.navigate(['espetaculo-detalhe/',id])
  }

  compDetalhe(id:string){
    console.log("implementar Front");
    //this.router.navigate([])
  }

  listar(elem: HTMLElement){
    if(!elem.classList.contains("active")){
      elem.classList.add("active");
    }else{
      elem.classList.remove("active");
    }

    console.log(elem);

  }



}
