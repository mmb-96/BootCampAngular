import { Component, OnInit } from '@angular/core';
import { OwnerServiceService } from '../owner-service.service';

@Component({
  selector: 'app-from-search',
  templateUrl: './from-search.component.html',
  styleUrls: ['./from-search.component.css']
})
export class FromSearchComponent implements OnInit {

  private owners: Object = [];

  constructor(private ownerService : OwnerServiceService) { }

  ngOnInit() {
    this.ownerService.getOwners().subscribe(data => {this.owners = data;});
  }

}
