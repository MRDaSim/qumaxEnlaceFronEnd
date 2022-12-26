import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private token: TokenService) { }

  ngOnInit(): void {
    this.token.onToken().subscribe(token => {
      this.token = token;
    })
  }

}
