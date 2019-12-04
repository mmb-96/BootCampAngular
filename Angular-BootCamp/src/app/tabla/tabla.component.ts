import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  public elements = [
    {nombre: "Manuel", apellido: "Melero", edad: 23,  direccion:{calle: "Costa Y Llobera", numero: 107, cp: "41006"}},
    {nombre: "Jaun Manuel", apellido: "Conde", edad: 23,direccion:{calle: "Leonardo da Vinci", cp: "41008"}},
    {nombre: "Oktay", apellido: "Faim", edad: 20, direccion:{calle: "Antares", numero: 4, cp:"41024"}},
    {nombre: "Robet", apellido: "Filip", edad: 22, direccion:{calle: "Avenida de alemania", numero: 7, cp: "41016"}},
    {nombre: "Lolo", apellido: "Hernandez", edad: 25, direccion:{calle: "Albacete", cp: "41006"}}
  ]

  public isPar = [];

  constructor() { }

  ngOnInit() {
  }

  public eliminar() {
    this.elements.pop();
  }

  public getParidad($event) {
    this.isPar.push($event);
  }

}