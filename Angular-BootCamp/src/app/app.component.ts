import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-BootCamp';
  // showP = true;
  // list = ['cosas1', 'cosas2', 'cosas3'];
  public showFullName:string;

  public receiveFullNane($event) {
    this.showFullName = $event;
  }
}
