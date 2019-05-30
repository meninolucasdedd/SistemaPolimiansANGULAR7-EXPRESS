import { Component, OnInit } from '@angular/core';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

export interface Categoria{
  nome: string;

}

@Component({
  selector: 'app-cadastrar-page',
  templateUrl: './cadastrar-page.component.html',
  styleUrls: ['./cadastrar-page.component.css']
})


export class CadastrarPageComponent implements OnInit {

    
  constructor() { }

  ngOnInit() {
  }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  categorias: Categoria[] = [
    {nome: 'Drama'},
    {nome: 'Comédia'},
    {nome: 'Monólogo'},
    {nome: 'Comtemporãnea'},
    {nome: 'Clássicos'},
    {nome: ''}
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our categorias
    if ((value || '').trim()) {
      this.categorias.push({nome: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(categorias: Categoria): void {
    const index = this.categorias.indexOf(categorias);

    if (index >= 0) {
      this.categorias.splice(index, 1);
    }
  }

  

}
