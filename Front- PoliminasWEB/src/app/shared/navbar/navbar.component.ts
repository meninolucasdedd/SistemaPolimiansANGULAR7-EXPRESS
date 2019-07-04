import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import { AutenticacaoService } from '../../services/autenticacao-service/autenticacao.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public isCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];


    usuario = new Usuario();


    logado:boolean = false;

    constructor(public location: Location, private router: Router, 
                private autenticacaoService: AutenticacaoService) {
    }

    ngOnInit() {
        if (this.autenticacaoService.getusuarioLogadoValue()) {
            this.logado = true;
            console.log(this.logado);
            this.usuario = this.autenticacaoService.getusuarioLogadoValue();
            }

      this.router.events.subscribe((event) => {
        this.isCollapsed = true;
        if (event instanceof NavigationStart) {
           if (event.url != this.lastPoppedUrl)
               this.yScrollStack.push(window.scrollY);
       } else if (event instanceof NavigationEnd) {
           if (event.url == this.lastPoppedUrl) {
               this.lastPoppedUrl = undefined;
               window.scrollTo(0, this.yScrollStack.pop());
           } else
               window.scrollTo(0, 0);
       }
     });

     this.location.subscribe((ev:PopStateEvent) => {
         this.lastPoppedUrl = ev.url;
     });
    }

    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if( titlee === '/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if( titlee === '/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }
    sair(){
        this.logado = false;
        this.usuario = new Usuario();
        this.autenticacaoService.logout();
        
    }

}
