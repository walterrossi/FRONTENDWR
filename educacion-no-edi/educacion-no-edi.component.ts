import { style } from '@angular/animations';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Educacion } from "src/app/model/Educacion.model";
import { EducacionService } from 'src/app/service/educacion.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-educacion-no-edi',
  templateUrl: './educacion-no-edi.component.html',
  styleUrls: ['./educacion-no-edi.component.css']
})
export class EducacionNoEdiComponent implements OnInit {


   
  public Educacions: Educacion[]=[];
  
  constructor(private educacionService: EducacionService) { }

  ngOnInit(): void {
    
    //
    //this.dataForm = this.fb.group({ type: new FormControl() });
    this.getEducacion();  //geteducacion  //cargarEducacion

  }

 // public cargarEducacion(): void{
   // this.educacionService.getEducacion().subscribe( data =>{this.educacion = data;})
 // }
public getEducacion(): void{
 this.educacionService.getEducacion().subscribe({next:(Response:Educacion[])=> {this.Educacions=Response;
}, error:(error:HttpErrorResponse)=>{alert(error.message);
}})}
//esta es otra forma de leer, sino la enterior






  
  


 
}




  
