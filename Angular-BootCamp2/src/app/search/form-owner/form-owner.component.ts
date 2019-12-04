import { Component, OnInit } from '@angular/core';
import { OwnerServiceService } from '../owner-service.service';

@Component({
  selector: 'app-form-owner',
  templateUrl: './form-owner.component.html',
  styleUrls: ['./form-owner.component.css']
})
export class FormOwnerComponent implements OnInit {

  public owner:Object = {};

  constructor(private ownerservice: OwnerServiceService) { }

  ngOnInit() {
  }

  public onSubmit(newOwner){
    newOwner.id = 999;
    newOwner.telephone = "";
    newOwner.city = "";
    newOwner.address="";
    this.ownerservice.addOwner(newOwner).subscribe(response => {this.owner = response},error => {console.log("Esto ha reventado")});
  }

}
