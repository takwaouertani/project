import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Membre } from '../class/membre';

const URL='http://localhost:3000/membre';
@Injectable({
  providedIn: 'root'
})
export class MembreService {
  

  constructor(private http:HttpClient) { }
  getMembres():Observable<Membre[]>{
    return this.http.get<Membre[]>(URL);
  }
  

}
