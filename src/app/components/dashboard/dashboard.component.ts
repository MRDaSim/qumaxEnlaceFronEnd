
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ProducContbService } from 'src/app/service/producContb.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  

  constructor(private token: TokenService, cookies: CookieService) {
    
  }

  ngOnInit(): void {
    
  }

cagarToken() {
  this.token.onToken().subscribe(token => {
     
  })
}

 
  
}
