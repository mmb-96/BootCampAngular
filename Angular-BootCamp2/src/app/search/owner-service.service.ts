import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OwnerServiceService {

  constructor(private httpClient : HttpClient) { }

  getOwners() {
    return this.httpClient.get('http://10.125.124.60:9966/petclinic/api/owners');
  }

  addOwner(owner) {
    let body = owner;
    return this.httpClient.post('http://10.125.124.60:9966/petclinic/api/owners', body);
  }

}
