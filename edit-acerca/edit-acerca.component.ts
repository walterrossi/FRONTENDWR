

import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseI } from '../model/response-i';
import { HttpClient } from '@angular/common/http';
import { AcercaService } from '../service/acerca.service';
import { Acerca } from '../model/acerca.model';
import { observable } from 'rxjs';

@Component({
  selector: 'app-edit-acerca',
  templateUrl: './edit-acerca.component.html',
  styleUrls: ['./edit-acerca.component.css']
})
export class EditAcercaComponent implements OnInit{



  formAcer= new FormGroup({
    idaAcer: new FormControl(''),
    titleAcer: new FormControl(''),
    infoAcer: new FormControl(''),
    imgAcer: new FormControl(''),
    nombreAcer: new FormControl('')
    });
  

  
  
  

constructor(private http: HttpClient, private AcercaService:AcercaService, private router:Router)  {}


ngOnInit(): void{
}

//este anda
submit(formAcer:any){
 console.log(formAcer);
//hasta aca

this.AcercaService.update(formAcer.idaAcer,formAcer).subscribe(data => console.log(data));  


this.router.navigate(['/paginaeditable']);



}
}
 //tengo que cambiar en el back para que guarde en otra base de datos
