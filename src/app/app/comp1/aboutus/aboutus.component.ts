import { Component, OnInit } from '@angular/core';
import { Membre } from 'src/app/class/membre';
import { MembreService } from 'src/app/service/membre.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
lesmembres:Membre[]=[];
constructor(private membreservice:MembreService){}
  ngOnInit(): void {
   this.membreservice.getMembres().subscribe(
    data=>{
      this.lesmembres=data;
    }
   )
  }
}
