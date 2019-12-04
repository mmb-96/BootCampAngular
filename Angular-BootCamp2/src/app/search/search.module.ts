import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FromSearchComponent } from './from-search/from-search.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FormOwnerComponent } from './form-owner/form-owner.component';



@NgModule({
  declarations: [FromSearchComponent, FormOwnerComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports: [ FromSearchComponent, FormOwnerComponent ]
})
export class SearchModule { }
