import { Component, OnInit } from '@angular/core';
import { Acerca } from '../model/acerca.model';
import { HttpClient } from '@angular/common/http';
import { AcercaService} from '../service/acerca.service';


@Component({
  selector: 'app-acercanoedit',
  templateUrl: './acercanoedit.component.html',
  styleUrls: ['./acercanoedit.component.css']
})

 export class AcercanoeditComponent implements OnInit {
  status: any;
  
    public acerca: Acerca[] = [];
  
    constructor( private acercaService: AcercaService, private http: HttpClient) { }
  
    ngOnInit(): void {
      this.cargarAcerca();
      //this.eliminarAcerca();
    }

    
  
      cargarAcerca(): void{
       this.acercaService.lista().subscribe(data=>{this.acerca=data;})
      

      }
    }

  