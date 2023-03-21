
import { Component, OnInit } from '@angular/core';
import { Form, FormControl,FormControlName,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EducacionService } from '../service/educacion.service';
import { observable } from 'rxjs';
import { Educacion } from '../model/Educacion.model';
import { EducacionComponent } from '../educacion/educacion.component';
import { BuscarEducacionComponent } from '../buscar-educacion/buscar-educacion.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-edit-educacion-id',
  templateUrl: './edit-educacion-id.component.html',
  styleUrls: ['./edit-educacion-id.component.css']
})
export class EditEducacionIdComponent implements OnInit{










   


  

  formEdu= new FormGroup({
    idEdu: new FormControl(''),
    titleEdu: new FormControl(''),
    startEdu: new FormControl(''),
    endEdu: new FormControl(''),
    descEdu:new FormControl(''),
    picEdu:new FormControl('')
  
 });

 
public educacion: Educacion[]= [];


  constructor(private http: HttpClient, private educacionservice:EducacionService,private router:Router) {}

  


  ngOnInit():void{ 
   // this.buscarEducacionPorId();
    }

  

submitBE(formEdu:any){
  //console.log(formEdu);

  //buscarEducacionPorId(): void {

  //this.educacionservice.buscarEducacionPorId(formEdu.idEdu).subscribe({Response:Educacion[])=> {this.Educacion=Response;})};
 this.educacionservice.buscarEducacionPorId(formEdu.idEdu).subscribe((res)=> {console.log(res)});
  //}
   
   
  //console.log('El Id es: ',formEdu.idEdu);
  
  //public getEducacion(): void{ this.educacionService.getEducacion().subscribe({next:(Response:Educacion[])=> {this.Educacions=Response;
 //}, error:(error:HttpErrorResponse)=>{alert(error.message);
 //}})}
  



}}
  


