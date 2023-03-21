
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Experiencia } from '../model/experiencia';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { ExperienciaService } from '../service/experiencia.service';
import { observable, Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent {


  formExp= new FormGroup({
    idExp: new FormControl(''),
    titleExp: new FormControl(''),
    startExp: new FormControl(''),
    endExp: new FormControl(''),
    locExp:new FormControl(''),
    picExp:new FormControl(''),
  
  });

  public experiencia: Experiencia[]=[];

constructor(private http: HttpClient, private ExperienciaService:ExperienciaService,private router:Router)  {}


ngOnInit(): void{
this.getExperiencia();
}


public getExperiencia():void{
this.ExperienciaService.getExperiencia().subscribe({next:(Response:Experiencia[])=>{this.experiencia=Response;},
error:(error:HttpErrorResponse)=>{alert(error.message);}})}

submit(formExp:any)  {   //le puse submiti porque si no me daba conflicto si se llama igual que otra.
  console.log(formExp);
  
  
  this.ExperienciaService.update(formExp.idExp,formExp).subscribe((data)=>{console.log(data)});
  
 
 
  this.router.navigate(['/paginaeditable']);
  
  
 
 

}


}
