
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ProducStel } from 'src/app/model/produc-stel';
import { ProducStelService } from 'src/app/service/produc-stel.service';
import { ProducContbService } from 'src/app/service/producContb.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  produc : ProducStel[] = [];

  polo! : any;
  
  producByReference : ProducStel[] = [];

  constructor(private cookies: CookieService, private producStel: ProducStelService) {}

  ngOnInit(): void {
    //this.getProductos();
    //this.getProducByReference();
  }

//getProductos(): void {
  //this.producStel.listaProduct().subscribe(data => {this.produc = data;})
//}


// getProducByReference() {
  
//    this.producStel.getProductByFullReference()
   

// }
  
}
