
import { Educacion } from "src/app/model/Educacion.model";
import { EducacionService } from 'src/app/service/educacion.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eliminar-educacion',
  templateUrl: './eliminar-educacion.component.html',
  styleUrls: ['./eliminar-educacion.component.css']
})
export class EliminarEducacionComponent {



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


eliminar_educacion(id:any){
  console.log("Eliminar");
this.educacionService.buscarEducacionPorId(id);
console.log(id);

}




}