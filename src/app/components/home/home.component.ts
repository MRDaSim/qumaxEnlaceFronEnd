import { Component, OnInit } from '@angular/core';
import { ProducStelService } from 'src/app/service/produc-stel.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private token: TokenService, private proc: ProducStelService) { }

  ngOnInit(): void {
    this.token.onToken()
    this.proc.getProductByFullReference();
  }

}
