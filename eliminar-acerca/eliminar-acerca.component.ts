
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

import { AcercaService } from '../service/acerca.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Acerca } from '../model/acerca.model';


@Component({
  selector: 'app-eliminar-acerca',
  templateUrl: './eliminar-acerca.component.html',
  styleUrls: ['./eliminar-acerca.component.css']
})
export class EliminarAcercaComponent implements OnInit{

  public acerca: Acerca[] = [];

  formAcer= new FormGroup({
    idaAcer: new FormControl(''),
    titleAcer: new FormControl(''),
    infoAcer: new FormControl(''),
    imgAcer: new FormControl(''),
    nombreAcer:new FormControl('')
  
  
    });

  constructor(private http: HttpClient, private AcercaService:AcercaService, public router:Router)  {}


  ngOnInit(): void{
  
  }

  submit(formAcer:any){
   console.log(formAcer.idaAcer);
  // this.educacionservice.buscarEducacionPorId(formEdu.idEdu).subscribe(resp=>{console.log(formEdu)});
   
  console.log('Los datos:',formAcer);


   this.AcercaService.delete(formAcer.idaAcer).subscribe(resp=>console.log("Borrado el Registro"));
   
  //navigation link.
   this.router.navigate(['/paginaeditable']);
   
  }
   
  



}

