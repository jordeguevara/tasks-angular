import { Component,Output, OnInit,Input } from '@angular/core';
import {EventItem} from '../event';
import {EventItemService} from '../event-item.service'
import {FormControl} from '@angular/forms';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})

export class EventFormComponent implements OnInit {

  constructor(private eventItemService: EventItemService) { } //nothing yet

  count: number =0;
  anotherEvent: EventItem;
  
  ngOnInit() {
 
  }

  addEvent(event: EventItem) : void { //Adds eventItem to EVENTS ArrayList
   this.eventItemService.addEventItems(event);
  }

  onSubmit(f: NgForm) { 
    let title =f.value.title;
    let description =f.value.description;

    this.anotherEvent = new EventItem(this.count++,title,description,false);
    console.log(this.anotherEvent);
     this.addEvent(this.anotherEvent); //adds new event to through EventItemServce
   }

}
