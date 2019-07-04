import { Component, OnInit } from '@angular/core';
import { Espetaculo } from '../models/espetaculo.model';
import { AutenticacaoService } from '../services/autenticacao-service/autenticacao.service';
import { EspetaculoService } from '../services/espetaculo-service/espetaculo-service.service'
import { CompanhiaService } from '../services/companhia-service/companhia.service';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../models/usuario.model';
import { Companhia } from '../models/companhia.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-espetaculo',
  templateUrl: './cadastro-espetaculo.component.html',
  styleUrls: ['./cadastro-espetaculo.component.css']
})
export class CadastroEspetaculoComponent implements OnInit {

  focus;
  focus1;

  espetaculo: Espetaculo = new Espetaculo();
  usuario: Usuario = new Usuario();
  companhia: Companhia = new Companhia();

  constructor(private autenticacaoService: AutenticacaoService,
    private pecaService: EspetaculoService,
    private companhiaService: CompanhiaService,
    private toasty: ToastrService) {

  }

  ngOnInit() {
    if (this.autenticacaoService.getusuarioLogadoValue()) {
      this.usuario = this.autenticacaoService.getusuarioLogadoValue();
      this.companhiaService.retrieveById(this.autenticacaoService.getcompanhiaLogadaId()).subscribe(
        (res: Companhia) => {
          this.companhia = res;
        }
      )

    }
  }

  onSubmit(loginForm: NgForm) {

    if (loginForm.invalid) {
      this.toasty.error("Todos os campos são obrigatórios.");
      return;
    }

    this.pecaService.register(this.espetaculo).subscribe(
      (res: Espetaculo) => {
        this.companhia.espetaculosEmCartaz.push(res._id);
        this.companhiaService.update(this.companhia).subscribe(
          (re) => {
            console.log("ok");
            location.assign(`espetaculo-detalhe/${res._id}`);
          }
        );
      }
    );
  }
}
