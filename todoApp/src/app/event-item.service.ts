import { Injectable } from '@angular/core';
import {EventItem} from './event'
import {EVENTS} from './events'

@Injectable({
  providedIn: 'root'
})
export class EventItemService {

  constructor() { }

  addEventItems(event : EventItem) : void {
  	EVENTS.push(event);
  }

  getEventItems() : Array<EventItem> {
  	return EVENTS;
  }

}
