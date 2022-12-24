
import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Experiencia } from '../model/experiencia';
import { HttpClient } from '@angular/common/http';
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

constructor(private http: HttpClient, private ExperienciaService:ExperienciaService,private router:Router)  {}


ngOnInit(): void{
}

submit(formExp:any)  {   //le puse submiti porque si no me daba conflicto si se llama igual que otra.
  console.log(formExp);
  
  
  this.ExperienciaService.update(formExp.idExp,formExp).subscribe((data)=>{console.log(data)});
  
 
 
  this.router.navigate(['/paginaeditable']);
  
  
 
 

}


}



