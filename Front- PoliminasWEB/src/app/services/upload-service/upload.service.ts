import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

 
  url:string = "http://localhost:3000/upload";

  constructor(private httpClient:HttpClient) { }
  upload(file:File):Observable<File>{
    return this.httpClient.post<File>(`${this.url}/simplefile`,file); //express 

  }

  list():Observable<File[]>{
    return this.httpClient.get<File[]>(`${this.url}/list`); //express 
  }

  delete(id:string){
    return this.httpClient.delete(`${this.url}/delete/${id}`); //express
  }

  retrieveById(id:string):Observable<File>{
    return this.httpClient.get<File>(`${this.url}/retrieve/${id}`); //express
  }

  update(File:File):Observable<File>{
    return this.httpClient.put<File>(`${this.url}/update/${File.name}`,File); //mongo
  }
}
