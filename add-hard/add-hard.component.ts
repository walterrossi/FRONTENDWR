

import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { HardService} from '../service/hard.service';





@Component({
  selector: 'app-add-hard',
  templateUrl: './add-hard.component.html',
  styleUrls: ['./add-hard.component.css']
})

export class AddHardComponent implements OnInit{
 

  formHard= new FormGroup({
    idHard: new FormControl(''),
    titleHard: new FormControl(''),
    porcHard: new FormControl(''),
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


  

constructor(private http: HttpClient, private HardService:HardService, private router:Router)  {}


ngOnInit(): void{

}

//este anda
submitf(formHard:any){
 console.log(formHard);
//hasta aca

this.HardService.addHard(this.formHard.value).subscribe(res=>{console.log(res)}, 
(error)=> {console.log(error)},

);
  

this.router.navigate(['/paginaeditable']);



}
}
 //tengo que cambiar en el back para que guarde en otra base de datos
