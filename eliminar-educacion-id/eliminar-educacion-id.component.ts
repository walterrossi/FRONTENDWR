import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

import { EducacionService } from '../service/educacion.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Educacion } from '../model/Educacion.model';

@Component({
  selector: 'app-eliminar-educacion-id',
  templateUrl: './eliminar-educacion-id.component.html',
  styleUrls: ['./eliminar-educacion-id.component.css']
})
export class EliminarEducacionIdComponent implements OnInit{

  formEdu= new FormGroup({
    idEdu: new FormControl(''),
    titleEdu: new FormControl(''),
    startEdu: new FormControl(''),
    endEdu: new FormControl(''),
    descEdu:new FormControl(''),
    picEdu:new FormControl('')
  
  
    });

  constructor(private http: HttpClient, private educacionservice:EducacionService, public router:Router)  {}


  ngOnInit(): void{
  
  }

  submit(formEdu:any){
   console.log(formEdu.idEdu);
  // this.educacionservice.buscarEducacionPorId(formEdu.idEdu).subscribe(resp=>{console.log(formEdu)});
   
  console.log('Los datos:',formEdu);


   this.educacionservice.delete(formEdu.idEdu).subscribe(resp=>console.log("Borrado el Registro"));
   
  //navigation link.
   this.router.navigate(['/paginaeditable']);
   
  }
   
  



}

