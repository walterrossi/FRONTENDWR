import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import {Proyecto} from '../model/proyecto';
import { HttpClient } from '@angular/common/http';
import { ProyectoService } from '../service/proyecto.service';
import { observable, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent {




  formProyecto= new FormGroup({
    idProyecto: new FormControl(''),
    titleProyecto: new FormControl(''),
    fechaProyecto: new FormControl(''),
    imaProyecto: new FormControl('')
    });

constructor(private http: HttpClient, private ProyectoService:ProyectoService,private router:Router)  {}


ngOnInit(): void{
}

submit(formProyecto:any)  {   //le puse submiti porque si no me daba conflicto si se llama igual que otra.
  console.log(formProyecto);
  
  
  this.ProyectoService.update(formProyecto.idProyecto,formProyecto).subscribe((data)=>{console.log(data)});
  
 
 
  this.router.navigate(['/paginaeditable']);
  
  
 
 

}


}




