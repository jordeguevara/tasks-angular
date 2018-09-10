import { Component, OnInit } from '@angular/core';
import {EVENTS} from '../events';



@Component({
  selector: 'app-add-item-button',
  templateUrl: './add-item-button.component.html',
  styleUrls: ['./add-item-button.component.css']
})
export class AddItemButtonComponent implements OnInit {
  constructor() { 	
  }
  events = EVENTS;
  submitted :boolean = true;

  isActive =true;
  isDropped =false;

  ngOnInit() {
  }

}
