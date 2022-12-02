import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddnewComponent } from './page/addnew/addnew.component';

import { EditdataComponent } from './page/editdata/editdata.component';
import { HomeComponent } from './page/home/home.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  {path:'home',component:HomeComponent},
  {path:'addnew',component:AddnewComponent},
  {path:'editdata/:id',component:EditdataComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
