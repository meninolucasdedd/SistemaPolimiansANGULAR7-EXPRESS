import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  url:string = "http://localhost:3000/usuarios";
  loginUrl:string = "http://localhost:3000/login";

  constructor(private httpClient:HttpClient) { }

  register(usuario:Usuario):Observable<Usuario>{
    return this.httpClient.post<Usuario>(`${this.loginUrl}/register`,usuario); //express 

  }

  list():Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.url}/list`); //express 
  }

  delete(id:string){
    return this.httpClient.delete(`${this.url}/delete/${id}`); //express
  }

  retrieveById(id:number):Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.url}/retrieve/${id}`); //express
  }

  update(usuario:Usuario):Observable<Usuario>{
    return this.httpClient.put<Usuario>(`${this.url}/update/${usuario._id}`,usuario); //mongo
  }

   retrieveByLogin(email:string):Observable<Usuario>{
     console.log(email);
    return this.httpClient.get<Usuario>(`${this.url}/retrieve/login/${email}`);
  } 

  login(email:string, senha:string):Observable<Usuario>{
    let inputLogin = {"email":email,"senha":senha}
    return this.httpClient.post<Usuario>(`${this.loginUrl}/`,inputLogin); //mongo
  }
}
