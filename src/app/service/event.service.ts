import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evenement } from '../class/evenement';
import { Observable } from 'rxjs';

const URL="http://localhost:3000/evenement"

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }
  getEvent():Observable<Evenement[]>{
    return this.http.get<Evenement[]>(URL);
  }
}
