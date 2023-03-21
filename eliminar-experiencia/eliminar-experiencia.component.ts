import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

import { ExperienciaService } from '../service/experiencia.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Experiencia } from '../model/experiencia';


@Component({
  selector: 'app-eliminar-experiencia',
  templateUrl: './eliminar-experiencia.component.html',
  styleUrls: ['./eliminar-experiencia.component.css']
})
export class EliminarExperienciaComponent implements OnInit{

  public experiencia: Experiencia[] = [];

  formExp= new FormGroup({
    idExp: new FormControl(''),
    titleExp: new FormControl(''),
    startExp: new FormControl(''),
    endExp: new FormControl(''),
    locExp:new FormControl(''),
    picExp: new FormControl('')
  
    });





  

  constructor(private http: HttpClient, private ExperienciaService:ExperienciaService, public router:Router)  {}


  ngOnInit(): void{
  
  }

  submit(formExp:any){
   console.log(formExp.idaAcer);
  // this.educacionservice.buscarEducacionPorId(formEdu.idEdu).subscribe(resp=>{console.log(formEdu)});
   
  console.log('Los datos:',formExp);


   this.ExperienciaService.delete(formExp.idExp).subscribe(resp=>console.log("Borrado el Registro"));
   
  //navigation link.
   this.router.navigate(['/paginaeditable']);
   
  }
   
  



}

