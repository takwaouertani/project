import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Members } from '../classes/members';
const URL='http://localhost:3000/membre';
@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http:HttpClient) { }
  getMembres():Observable<Members[]>{
    return this.http.get<Members[]>(URL);
  }}
