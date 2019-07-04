import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Companhia } from 'src/app/models/companhia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanhiaService {

  url:string = "http://localhost:3000/companhias";

  constructor(private httpClient:HttpClient) { }

  register(companhia: Companhia):Observable<Companhia>{
    return this.httpClient.post<Companhia>(`${this.url}/register`,companhia); //express 

  }

  list():Observable<Companhia[]>{
    return this.httpClient.get<Companhia[]>(`${this.url}/list`); //express 
  }

  delete(id:string){
    return this.httpClient.delete(`${this.url}/delete/${id}`); //express
  }

  retrieveById(id:string):Observable<Companhia>{
    return this.httpClient.get<Companhia>(`${this.url}/retrieve/${id}`); //express
  }

  update(companhia:Companhia):Observable<Companhia>{
    return this.httpClient.put<Companhia>(`${this.url}/update/${companhia._id}`,companhia); //mongo
  }

}
