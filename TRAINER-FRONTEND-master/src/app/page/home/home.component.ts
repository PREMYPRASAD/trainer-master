import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor(private apiService: ApiService,private router:Router) { }

  trainers: any = []
  id:any
  ngOnInit() {
    this.getData();
  }

 navigate(){
  this.router.navigate(['/addnew'])
 }


 navigatetoEdit(id:any){
  this.router.navigate([`/editdata/${id}`])
  
 }

  getData() {
    this.apiService.gettrainerList().subscribe(res => {
      this.trainers = res
    })
  }

  deletetrainer(id:any){
    this.apiService.deletetrainer(id).subscribe(res=>{
      this.getData()
    })
  }

}
