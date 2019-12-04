import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Pet } from '../models/pet';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  public pets: Pet[];
  constructor( private petService: PetService) { }

  ngOnInit() {
   this.petService.getPets().subscribe( results => (this.pets = results))
  }

}
