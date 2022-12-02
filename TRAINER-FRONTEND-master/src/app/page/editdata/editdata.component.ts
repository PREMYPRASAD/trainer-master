import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.css']
})
export class EditdataComponent implements OnInit {

  id:any
 books:any=[]
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

    this.id=this.route.snapshot.params['id'];
    this.apiService.gettrainerById(this.id).subscribe((res:any)=>{
      this.data=res
    })
  }
  onSubmit(){
    this.apiService.updatetrainer(this.data).subscribe((res:any)=>{
      console.log(res)
      this.data=res.data
      alert("Data updated successfully")
      this.router.navigate(['/home'])
    })
  }

}
