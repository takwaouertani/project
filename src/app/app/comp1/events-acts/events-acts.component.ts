import { Component, OnInit } from '@angular/core';
import { Evenement } from 'src/app/class/evenement';
import { Organisateur } from 'src/app/class/organisateur';
import { Partenaire } from 'src/app/class/partenaire';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-events-acts',
  templateUrl: './events-acts.component.html',
  styleUrls: ['./events-acts.component.css']
})
export class EventsActsComponent implements OnInit{
 event:Evenement[]=[];

 constructor(private eventservice:EventService){}
  ngOnInit(): void {
    this.eventservice.getEvent().subscribe(
      data =>{
        this.event=data
      }
    )
  }

}
