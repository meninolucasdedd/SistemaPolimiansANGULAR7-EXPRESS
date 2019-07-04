import { Injectable } from '@angular/core';
import { Workshop } from 'src/app/models/workshop.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkshopService {

  url:string = "http://localhost:3000/workshops";

  constructor(private httpClient:HttpClient) { }

  register(workshop:Workshop):Observable<Workshop>{
    return this.httpClient.post<Workshop>(`${this.url}/register`,workshop); //express 

  }

  list():Observable<Workshop[]>{
    return this.httpClient.get<Workshop[]>(`${this.url}/list`); //express 
  }

  delete(id:string){
    return this.httpClient.delete(`${this.url}/delete/${id}`); //express
  }

  retrieveById(id:string):Observable<Workshop>{
    return this.httpClient.get<Workshop>(`${this.url}/retrieve/${id}`); //express
  }

  update(workshop:Workshop):Observable<Workshop>{
    return this.httpClient.put<Workshop>(`${this.url}/update/${workshop._id}`,workshop); //mongo
  }
}
