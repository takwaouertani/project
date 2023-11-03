import { Injectable, OnInit } from '@angular/core';
import { Membre } from '../class/membre';

@Injectable({
  providedIn: 'root'
})
export class MembreService {
  

  constructor() { }
  membre:Membre[]=[
   
      new Membre("assets/img1.jpg","takwa ouertani","directeur"),
      new Membre("assets/img2.jpg","Essia Ayari","directeur"),
      new Membre("assets/img3.png","takwa ouertani","directeur"),
      new Membre("assets/img4.png","takwa ouertani","directeur"),
      new Membre("assets/img5.png","takwa ouertani","directeur"),
      new Membre("assets/img6.png","takwa ouertani","directeur"),

    ]
  

}
