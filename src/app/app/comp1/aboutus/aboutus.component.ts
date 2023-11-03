import { Component, OnInit } from '@angular/core';
import { Membre } from 'src/app/class/membre';
import { MembreService } from 'src/app/service/membre.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  membre: Membre[]=[] ;
  constructor(private membreservice:MembreService){}
  ngOnInit(): void {
    this.membre = this.membreservice.membre;  }

}
