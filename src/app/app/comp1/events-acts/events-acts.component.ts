import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Events } from '../../classes/events';

@Component({
  selector: 'app-events-acts',
  templateUrl: './events-acts.component.html',
  styleUrls: ['./events-acts.component.css']
})
export class EventsActsComponent  {
 event:Events[]=[];

  constructor(private eventservice:EventsService){}
   ngOnInit(): void {
     this.eventservice.getEvent().subscribe(
       data =>{
        this.event=data
    }
     );
   }
}
