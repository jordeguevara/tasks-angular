import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date = new Date();
  dateTitle = this.date.toString().split(" ").splice(0,4);

  title = this.dateTitle.join(" ");

}
