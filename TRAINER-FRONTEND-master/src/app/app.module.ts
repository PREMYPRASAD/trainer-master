import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddnewComponent } from './page/addnew/addnew.component';
import { EditdataComponent } from './page/editdata/editdata.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './page/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    AddnewComponent,
    EditdataComponent,
    NavbarComponent,
    HomeComponent,
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
