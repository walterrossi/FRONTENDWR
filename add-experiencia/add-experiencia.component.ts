

import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseI } from '../model/response-i';
import { HttpClient } from '@angular/common/http';
import { ExperienciaService} from '../service/experiencia.service';


@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})


export class AddExperienciaComponent implements OnInit{


  formExp= new FormGroup({
    idExp: new FormControl(''),
    titleExp: new FormControl(''),
    startExp: new FormControl(''),
    endExp: new FormControl(''),
    locExp:new FormControl(''),
    picExp:new FormControl('')
  
  });
  

  

constructor(private http: HttpClient, private ExperienciaService:ExperienciaService, private router:Router)  {}


ngOnInit(): void{

}

//este anda
submitEXPADD(formExp:any):void{
 console.log(formExp);
//hasta aca

this.ExperienciaService.add(this.formExp.value).subscribe((res)=>{
  console.log(res);
  
}, (error)=> {console.log(error)},
);

     
this.router.navigate(['/paginaeditable']);
 


}
}
