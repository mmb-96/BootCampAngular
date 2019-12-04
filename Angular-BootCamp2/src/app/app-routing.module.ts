import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FromSearchComponent } from './search/from-search/from-search.component';
import { PetsComponent } from './pets/pets.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {
    path: '', component: WelcomeComponent
  },
  {
    path: 'owners', component: FromSearchComponent
  },
  {
    path: 'pets', component: PetsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
