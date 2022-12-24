

import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseI } from '../model/response-i';
import { HttpClient } from '@angular/common/http';
import { HardService} from '../service/hard.service';
import { Hard } from '../model/hard';
import { observable } from 'rxjs';

@Component({
  selector: 'app-edit-hard',
  templateUrl: './edit-hard.component.html',
  styleUrls: ['./edit-hard.component.css']
})
export class EditHardComponent implements OnInit{



  formHard= new FormGroup({
    idHard: new FormControl(''),
    titleHard: new FormControl(''),
    porcHard: new FormControl(''),
    });
  

  

constructor(private http: HttpClient, private HardService:HardService, private router:Router)  {}


ngOnInit(): void{

}

//este anda
submite(formHard:any){
 console.log(formHard);
//hasta aca

this.HardService.update(formHard.idHard,formHard).subscribe(data => console.log(data));  


this.router.navigate(['/paginaeditable']);



}
}
 //tengo que cambiar en el back para que guarde en otra base de datos
