import { Component, OnInit } from '@angular/core';
import { Form, FormControl,FormControlName,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EducacionService } from '../service/educacion.service';
import { observable } from 'rxjs';
import { Educacion } from '../model/Educacion.model';
import { EducacionComponent } from '../educacion/educacion.component';


@Component({
  selector: 'app-buscar-educacion',
  templateUrl: './buscar-educacion.component.html',
  styleUrls: ['./buscar-educacion.component.css']
})



export class BuscarEducacionComponent implements OnInit{

papi='Walter';
   

  //Educacion= new Educacion[]: [];
  

  formEdu= new FormGroup({
    idEdu: new FormControl(''),
    titleEdu: new FormControl(''),
    startEdu: new FormControl(''),
    endEdu: new FormControl(''),
    descEdu:new FormControl(''),
    picEdu:new FormControl('')
  
 });

 



  constructor(private http: HttpClient, private educacionservice:EducacionService)  {

  }


  ngOnInit(){
    }

  

submitBE(formEdu:any){
  //console.log(formEdu);

   this.educacionservice.buscarEducacionPorId(formEdu.idEdu).subscribe((res)=> {console.log(res)});
  
   
   
  console.log('El Id es: ',formEdu.idEdu);
  
  
  



}
  


}