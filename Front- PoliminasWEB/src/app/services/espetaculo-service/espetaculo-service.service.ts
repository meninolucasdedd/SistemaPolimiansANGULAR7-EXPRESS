import { Injectable } from '@angular/core';
import { Espetaculo } from 'src/app/models/espetaculo.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EspetaculoService {

  url:string = "http://localhost:3000/espetaculos";

  constructor(private httpClient:HttpClient) { }

  register(espetaculo:Espetaculo):Observable<Espetaculo>{
    return this.httpClient.post<Espetaculo>(`${this.url}/register`,espetaculo); //express 

  }

  list():Observable<Espetaculo[]>{
    return this.httpClient.get<Espetaculo[]>(`${this.url}/list`); //express 
  }

  delete(id:string){
    return this.httpClient.delete(`${this.url}/delete/${id}`); //express
  }

  retrieveById(id:string):Observable<Espetaculo>{
    return this.httpClient.get<Espetaculo>(`${this.url}/retrieve/${id}`); //express
  }

  update(espetaculo:Espetaculo):Observable<Espetaculo>{
    return this.httpClient.put<Espetaculo>(`${this.url}/update/${espetaculo._id}`,espetaculo); //mongo
  }
}
