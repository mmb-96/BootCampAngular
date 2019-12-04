import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() name: string;
  @Input() surname: string;
  @Output() fullname: EventEmitter<any> = new EventEmitter();
  public query:string;
  public result: string;

  constructor() {
    this.query = "";
   }

   public search() {
     this.result = 'Consulta realizada con query \"' +this.query  +'\"';
     this.sendFullName();
   }

   public sendFullName() {
    let fullnameAux = this.name + " " + this.surname;
    this.fullname.emit(fullnameAux);
   }

  ngOnInit() {
  }

}
