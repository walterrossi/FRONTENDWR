import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseI } from '../model/response-i';
import { HttpClient } from '@angular/common/http';
import { EducacionService} from '../service/educacion.service';


@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit{


  

  formEdu= new FormGroup({
    idEdu: new FormControl(''),
    titleEdu: new FormControl(''),
    startEdu: new FormControl(''),
    endEdu: new FormControl(''),
    descEdu:new FormControl(''),
    picEdu:new FormControl('')
  
  });
  
 // form: FormGroup;
 // constructor(public fb: FormBuilder, private http: HttpClient,private router:Router ) {
  //  this.form = this.fb.group({
   //   idEdu: [''],
   //   titleEdu: [''],
   //   startDateEdu: [''],
   //   endDateEdu:[''],
   //   descEdu:[''],
   //   picEdu:['']
   // });
 // }


  

constructor(private http: HttpClient, private EducacionService:EducacionService, private router:Router)  {}


ngOnInit(): void{

}

//este anda
submitADD(formEdu:any):void{
 console.log(formEdu);
//hasta aca

this.EducacionService.add(this.formEdu.value).subscribe((res)=>{
  console.log(res);
  
}, (error)=> {console.log(error)},
);

this.router.navigate(['/paginaeditable']);

 


}
}
