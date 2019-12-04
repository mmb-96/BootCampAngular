import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { SearchComponent } from './search/search.component';
import { TablaComponent } from './tabla/tabla.component';
import { TablasElemComponent } from './tabla/tablas-elem/tablas-elem.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    SearchComponent,
    TablaComponent,
    TablasElemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
