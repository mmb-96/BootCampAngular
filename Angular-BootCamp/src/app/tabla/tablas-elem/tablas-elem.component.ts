import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tablas-elem',
  templateUrl: './tablas-elem.component.html',
  styleUrls: ['./tablas-elem.component.css']
})
export class TablasElemComponent implements OnInit {
  @Input() direccion: any;
  @Output() paridad: EventEmitter<any> =new EventEmitter();

  constructor() {  }

  ngOnInit() {
    let num = this.direccion.numero ? this.direccion.numero : 0;
    this.paridad.emit(num%2);
  }

}
