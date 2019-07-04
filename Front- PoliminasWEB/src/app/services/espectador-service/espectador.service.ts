import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Espectador } from 'src/app/models/espectador.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspectadorService {

  url:string = "http://localhost:3000/espectadores";

  constructor(private httpClient:HttpClient) { }

  register(espectador:Espectador):Observable<Espectador>{
    return this.httpClient.post<Espectador>(`${this.url}/register`,espectador); //express 

  }

  list():Observable<Espectador[]>{
    return this.httpClient.get<Espectador[]>(`${this.url}/list`); //express 
  }

  delete(id:string){
    return this.httpClient.delete(`${this.url}/delete/${id}`); //express
  }

  retrieveById(id:string):Observable<Espectador>{
    return this.httpClient.get<Espectador>(`${this.url}/retrieve/${id}`); //express
  }

  update(espectador:Espectador):Observable<Espectador>{
    return this.httpClient.put<Espectador>(`${this.url}/update/${espectador._id}`,espectador); //mongo
  }



}
