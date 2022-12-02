import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl:String = 'http://localhost:3000/api'
  // apiUrl:String ='api'

  constructor(private http :HttpClient) { }

  //to fetch all data list
gettrainerList(){
  return this.http.get(`${this.apiUrl}/TrainerDetailsview`)
}

// to fetch data of a single
gettrainerById(id:any){
  return this.http.get(`${this.apiUrl}/TrainerdetailsSelect/${id}`)
}


// to delete
deletetrainer(id:any){
  return this.http.delete(`${this.apiUrl}/TrainerdetailsRemove/${id}`)
}

// to add new  

addtrainer(data:any){
  return this.http.post(`${this.apiUrl}/Trainerdetailsadd`, data)

}


// to update existing 
updatetrainer(data:any){
  return this.http.put(`${this.apiUrl}/TrainerdetailsUpdate`,data)

}


}
