import { Component, OnInit } from '@angular/core';
import { ProducStel } from 'src/app/model/produc-stel';
import { ProducStelService } from 'src/app/service/produc-stel.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  proc: ProducStel[] = [];

  constructor(private producStelService: ProducStelService) { }

  ngOnInit(): void {
  }

 // cargarEducacion(): void {
     // this.producStelService.lista().subscribe(data => {this.proc = data;})
 //   }
  
}
