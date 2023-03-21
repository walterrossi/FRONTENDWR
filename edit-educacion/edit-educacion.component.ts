import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import {Educacion} from '../model/Educacion.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EducacionService } from '../service/educacion.service';
import { observable, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {

  formEduEdi= new FormGroup({
    idEdu: new FormControl(''),
    titleEdu: new FormControl(''),
    startEdu: new FormControl(''),
    endEdu: new FormControl(''),
    descEdu:new FormControl(''),
    picEdu:new FormControl('')
  
  });
  public educacion: Educacion[]=[];

constructor(private http: HttpClient, private EducacionService:EducacionService,private router:Router)  {}

  
 


ngOnInit(): void{
  this.getEducacion();  //geteducacion  //cargarEducacion
}



  public getEducacion(): void{
    this.EducacionService.getEducacion().subscribe({next:(Response:Educacion[])=> 
      {this.educacion=Response;}, error:(error:HttpErrorResponse)=>{alert(error.message);
   }})}



submit(formEduEdi:any)  {   //le puse submiti porque si no me daba conflicto si se llama igual que otra.
  console.log(formEduEdi);
  

  
  this.EducacionService.update(formEduEdi.idEdu,formEduEdi).subscribe((data)=>{console.log(data)});


  
 
  this.router.navigate(['/paginaeditable']);
   
  
 
 

  }






}










 //tengo que cambiar en el back para que guarde en otra base de datos
