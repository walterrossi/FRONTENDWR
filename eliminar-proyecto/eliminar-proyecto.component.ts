
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

import { ProyectoService } from '../service/proyecto.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Proyecto } from '../model/proyecto';


@Component({
  selector: 'app-eliminar-proyecto',
  templateUrl: './eliminar-proyecto.component.html',
  styleUrls: ['./eliminar-proyecto.component.css']
})
export class EliminarProyectoComponent implements OnInit {




  public proyecto: Proyecto[] = [];

  formProyecto= new FormGroup({
    idProyecto: new FormControl(''),
    titleProyecto: new FormControl(''),
    fechaProyecto: new FormControl(''),
    imaProyecto: new FormControl(''),
  

    });





  

  constructor(private http: HttpClient, private ProyectoService:ProyectoService, public router:Router)  {}


  ngOnInit(): void{
  
  }

  submit(formProyecto:any){
   console.log(formProyecto.idProyecto);
  // this.educacionservice.buscarEducacionPorId(formEdu.idEdu).subscribe(resp=>{console.log(formEdu)});
   
  console.log('Los datos:',formProyecto);


   this.ProyectoService.delete(formProyecto.idProyecto).subscribe(resp=>console.log("Borrado el Registro"));
   
  //navigation link.
   this.router.navigate(['/paginaeditable']);
   
  }
   
  



}

