import { Component,OnInit } from '@angular/core';
import { EducacionService } from '../service/educacion.service';
import { Educacion } from '../model/Educacion.model';

@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['./agregar-educacion.component.css']
})

export class AgregarEducacionComponent implements OnInit{
 
  educacion: Educacion[] = []; 


constructor(educacionService:EducacionService) {}

ngOnInit(): void {
 this.addEdu();
}


addEdu(): void{
  //this.educacion.lista().subscribe( data =>{this.educacion= data;});}
  console.log('AddEDUcacion..');
}
}