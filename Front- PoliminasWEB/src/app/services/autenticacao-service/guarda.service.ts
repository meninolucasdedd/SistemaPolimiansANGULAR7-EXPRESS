import { Injectable } from '@angular/core';
import { AutenticacaoService } from './autenticacao.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardaService {

  constructor(private autenticador: AutenticacaoService,
    private roteador: Router) {
}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

if (this.autenticador.getusuarioLogadoValue()) {
return true;
}


this.roteador.navigate(["entrar"]);
return false;
}
}
