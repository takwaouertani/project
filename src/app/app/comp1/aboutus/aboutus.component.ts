import { Component, OnInit } from '@angular/core';
import { Members } from '../../classes/members';
import { MembersService } from '../../services/members.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent  implements OnInit{
  lesmembres:Members[]=[];
  constructor(private membreservice:MembersService){}
    ngOnInit(): void {
     this.membreservice.getMembres().subscribe(
      data=>{
        this.lesmembres=data;
      }
     )
    }
}
