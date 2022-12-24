import { Component, OnInit } from '@angular/core';
import { Educacion } from '../model/Educacion.model';
import { EducacionService } from '../service/educacion.service';
import { HttpClient,HttpResponse,HttpErrorResponse} from '@angular/common/http';
import { NgModel } from '@angular/forms';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-buscar-educacion-id',
  templateUrl: './buscar-educacion-id.component.html',
  styleUrls: ['./buscar-educacion-id.component.css']
})
export class BuscarEducacionIdComponent implements OnInit {

  Educacions: Educacion[] = [];
  campoId: any = '';
constructor(private http:HttpClient, private EducacionService:EducacionService, private router:Router){}

ngOnInit(): void {
  
}

setValue(){

  this.EducacionService.buscarEducacionPorId(this.campoId).subscribe( (data) => {console.log(data)});

 // this.EducacionService.buscarEducacionPorId().subscribe(res=>console.log(res));
 this.router.navigate(['/portfolio']);  //aca redirijo a portfolio de esta forma


 
  this.EducacionService.getEducacion().subscribe({next:(Response:Educacion[])=> {this.Educacions=Response;
 }, error:(error:HttpErrorResponse)=>{alert(error.message);
 }})

}

}





