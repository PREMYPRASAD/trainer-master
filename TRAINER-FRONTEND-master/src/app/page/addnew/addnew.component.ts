import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {

  trainers:any=[]
 
  constructor(
    private apiService: ApiService,
    private router:Router,
    private route:ActivatedRoute
    ) { }
    data={
      trainerName:'',
      trainerMobile:'',
      trainerEmail:'',
      trainerAddress:'',
      trainerOfflocation:'',
      trainerUsername:'',
      trainerPassword:''
      }
  

  ngOnInit(): void {
   
  }

  onSubmit(){
    this.apiService.addtrainer(this.data).subscribe(res=>{
      this.trainers=res
      alert('successfully added');
      this.router.navigate(['/home'])
    })
  }  
}
