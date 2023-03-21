import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

import { HardService } from '../service/hard.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Hard } from '../model/hard';

@Component({
  selector: 'app-eliminar-hard',
  templateUrl: './eliminar-hard.component.html',
  styleUrls: ['./eliminar-hard.component.css']
})
export class EliminarHardComponent implements OnInit {




  public hard: Hard[] = [];

  formHard= new FormGroup({
    idHard: new FormControl(''),
    titleHard: new FormControl(''),
    porcHArd: new FormControl('')
 

    });





  

  constructor(private http: HttpClient, private HardService:HardService, public router:Router)  {}


  ngOnInit(): void{
  
  }

  submit(formHard:any){
   console.log(formHard.idHard);
  // this.educacionservice.buscarEducacionPorId(formEdu.idEdu).subscribe(resp=>{console.log(formEdu)});
   
  console.log('Los datos:',formHard);


   this.HardService.delete(formHard.idHard).subscribe(resp=>console.log("Borrado el Registro"));
   
  //navigation link.
   this.router.navigate(['/paginaeditable']);
   
  }
   
  



}

