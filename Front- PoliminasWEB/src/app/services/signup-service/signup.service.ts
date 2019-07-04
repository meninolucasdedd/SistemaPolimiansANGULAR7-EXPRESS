import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  url: string = "http://localhost:3000/login";

  constructor(private httpClient: HttpClient) { }

  register(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(`${this.url}/register`, usuario); //express 
  }

  update(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.put<Usuario>(`${this.url}/update/${usuario._id}`, usuario); //mongo
  }


}