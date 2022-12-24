import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseI } from '../model/response-i';
import { HttpClient } from '@angular/common/http';
import { ProyectoService} from '../service/proyecto.service';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})



export class AddProyectoComponent implements OnInit{



  formProyecto= new FormGroup({
    idProyecto: new FormControl(''),
    titleProyecto: new FormControl(''),
    fechaProyecto: new FormControl(''),
    imaProyecto: new FormControl(''),
    
  });
  

  

constructor(private http: HttpClient, private ProyectoService:ProyectoService, private router:Router)  {}


ngOnInit(): void{

}

//este anda
submitEXPADD(formProyecto:any):void{
 console.log(formProyecto);
//hasta aca

this.ProyectoService.addProyecto(this.formProyecto.value).subscribe((res)=>{
  console.log(res);
  
}, (error)=> {console.log(error)},
);

     
this.router.navigate(['/paginaeditable']);
 


}
}
