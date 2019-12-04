import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from './models/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private httpClient : HttpClient) { }

  getPets(){
    return this.httpClient.get<Pet[]>('http://10.125.124.60:9966/petclinic/api/pets');
  }
}
