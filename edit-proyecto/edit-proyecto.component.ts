import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import {Proyecto} from '../model/proyecto';
import { HttpClient } from '@angular/common/http';
import { ProyectoService } from '../service/proyecto.service';
import { observable, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ResponseI } from '../model/response-i';


@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})


export class EditProyectoComponent implements OnInit{

  formProyecto= new FormGroup({
    idProyecto: new FormControl(''),
    titleProyecto: new FormControl(''),
    fechaProyecto: new FormControl(''),
    imaProyecto: new FormControl('')
    });

public proy:Proyecto[]=[];

constructor(private http: HttpClient, private ProyectoService:ProyectoService,private router:Router)  {}


ngOnInit(): void{
this.cargarProyecto();
}



cargarProyecto():void{
  this.ProyectoService.lista().subscribe(data=>{this.proy=data;})
}

      
submit(formProyecto:any)  {   //le puse submiti porque si no me daba conflicto si se llama igual que otra.
  console.log(formProyecto);
  
  
  this.ProyectoService.update(formProyecto.idProyecto,formProyecto).subscribe((data)=>{console.log(data)});
  
 
 
  this.router.navigate(['/paginaeditable']);
  
  
 
 

}


}




